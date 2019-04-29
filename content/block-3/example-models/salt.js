import crypto from 'crypto'

export default (sequelize, DataTypes) => {
  const Salt = sequelize.define('salt', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  // Class methods
  Salt.getPasswordSalt = async function () {
    const lastSalt = await this.getLast()

    if (lastSalt) return lastSalt

    return this.createRandom()
  }

  Salt.getLast = function () {
    return this.findOne({ order: [['createdAt', 'DESC']] })
  }

  Salt.createRandom = function (bytes = 16) {
    return this.create({ value: crypto.randomBytes(bytes).toString('hex') })
  }

  return Salt
}
