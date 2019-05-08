[Back to Index](../../README.md)

# Block 3: Start sample project (2 weeks)

## Contents

- GraphQL.
- ORM (Sequelize).

## Resources

### GraphQL

- Introductory oficial documentation:
  - https://graphql.org/learn. Read the sections **Queries and Mutations** and **Schemas and Types**.

### ORM (Sequelize)

- Basic theory on ORMs:
  - https://en.wikipedia.org/wiki/Object-relational_mapping.
- Sequelize's oficial documentation: http://docs.sequelizejs.com (no need to dig very deep right now).

## Tasks

We'll start creating a very simple Chat platform. Make sure to create a public repository into your Github account to host this code. Also, make sure to put in practice the [Git Flow](https://datasift.github.io/gitflow/IntroducingGitFlow.html).

1. Setup an initial boilerplate for this project. Use [this repository](https://github.com/abelosorio/graphql-boilerplate) as base.

1a. Setup a PostgreSQL database (https://www.postgresql.org/docs/11/tutorial-install.html).

2. Create a Sequelize model `User` with the following attributes:
  - `id` (UUID);
  - `firstName`;
  - `lastName`;
  - `username` (unique);
  - `password` (MD5 encrypted).
  
**NOTE**: Take a look at the sample models [here](sample-models).

3. Create a migration that creates the `user` table (and `salt`, if you used the sample models).

4. Create the type `User` in GraphQL.

5. Create a Query `users` that returns all users in database.

6. Create a Query `user` that returns a user by passing its id.

7. Create a Mutation `createUser` that creates a single user and returns it.

## Wrap-up

Don't forget to ask any question you have. Also, contact Abel or Mauricio to get in touch with team members and learn how we use the things you just learned.

## Bonus
