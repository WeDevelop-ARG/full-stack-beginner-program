import crypto from 'crypto'

export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  // Instance methods
  User.prototype.passwordMatches = async function (value, models = sequelize.models) {
    const salt = await models.salt.getPasswordSalt()
    const currentPasswordBuffer = Buffer.from(this.password, 'hex')

    return crypto.scryptSync(value, salt.value, 64).equals(currentPasswordBuffer)
  }

  // Class methods
  User.hashPasswordHook = async function (user) {
    if (!user.password) return user

    user.password = await User.getEncryptedPassword(user.password)
  }

  User.getEncryptedPassword = async function (plainPassword, models = sequelize.models) {
    const salt = await models.salt.getPasswordSalt()

    return crypto.scryptSync(plainPassword, salt.value, 64).toString('hex')
  }

  // hooks
  User.beforeCreate(User.hashPasswordHook.bind(User))
  User.beforeUpdate(User.hashPasswordHook.bind(User))

  return User
}
