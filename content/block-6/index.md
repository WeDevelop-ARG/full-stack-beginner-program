# Block 6: Start sample project (2 weeks) [WIP]

[« Back to Index](../../README.md)

## Contents

- GraphQL.
- ORM (Sequelize).

## Resources

### GraphQL

- Introductory oficial documentation: <https://graphql.org/learn>. Read the sections **Queries and Mutations** and **Schemas and Types**.

### ORM (Sequelize)

- Basic theory on ORMs <https://en.wikipedia.org/wiki/Object-relational_mapping>.
- Sequelize's oficial documentation: <http://docs.sequelizejs.com> (no need to dig very deep right now).

## Tasks

1. Diseñar cada uno por separado los tipos, queries y mutaciones para cumplir con las siguientes indicaciones:

- Los usuarios en el sistema son almacenados con: nombre, apellido, email y contraseña.
- Se tiene que poder guardar un nuevo usuario en el sistema, y todos los campos del item anterior son obligatorios. No se permiten dos usuarios con el mismo email.
- A partir del par "email, contraseña", el sistema tiene que poder verificar si existe un usuario que cumpla con esos dos datos. Si existe, se devuelven todos los datos asociados al usuario. Si no existe, se devuelve un error.
- Se tiene que poder consultar cuál es el "usuario actual" que está identificado en el sistema y devolver todos sus datos. Si no hay un usuario identificado, se devuelve un error.






2. Setup an initial boilerplate for this project. Use [this repository](https://github.com/abelosorio/graphql-boilerplate) as base.

  1.a. Setup a PostgreSQL database (https://www.postgresql.org/docs/11/tutorial-install.html).

2. Create a Sequelize model `User` with the following attributes:
  - `id` (UUID);
  - `firstName`;
  - `lastName`;
  - `username` (unique);
  - `salt`;
  - `password` (MD5 encrypted).

**NOTE**: Take a look at the sample models [here](sample-models).

3. Create a migration that creates the `user` table.

4. Create the type `User` in GraphQL.

5. Create a Query `users` that returns all users in database.

6. Create a Query `user` that returns a user by passing its id.

7. Create a Mutation `createUser` that creates a single user and returns it.

## Wrap-up

Don't forget to ask any question you have. Also, contact you Leader to get in touch with team members and learn how we use the things you just learned.

## Bonus

Nothing so far.

[Next block](../block-6/index.md)
