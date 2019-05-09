[« Back to Index](../../README.md)

# Block 4: Create a frontend + Authentication (2 weeks)

## Contents

- React.
- Apollo Client.
- JWT.
- Passport.
- React Bootstrap.

## Resources

### Apollo Client
- Oficial documentation: https://www.apollographql.com/docs/react.
- Local state management: https://www.apollographql.com/docs/react/essentials/local-state.

### JWT
- Oficial documentation: https://jwt.io/introduction.

### Passport
- Oficial documentation: http://www.passportjs.org/docs.
- Local strategy (username & password): http://www.passportjs.org/docs/username-password.
- JWT strategy: http://www.passportjs.org/packages/passport-jwt.

### React Bootstrap
- Oficial documentation: https://react-bootstrap.github.io.

## Tasks

### Frontend

1. Create a new repository for your frontend. Use [react-create-app](https://github.com/facebook/create-react-app) to create the initial boilerplate.

2. Create a component `SignupPage`. This component will be used for users to sign up on our Chat page. You'll find more detail about this page [here](./signup-details.md).

3. Create a component `SigninPage`. This component will be used for users to sign up on our Chat page. You'll find more detail about this page [here](./signin-details.md).

### Backend

1. Create a Mutation `signup`. Details [here](./signup-mutation.md).

2. Create a Mutation `signin`. Details [here](./signin-mutation.md).

3. Configure `passport-jwt` as middleware and extract current user's information on every request.

4. Create a Query `currentUser`. Details [here](./current-user-query.md).

### Frontend

1. Connect the `SignupPage` with the Mutation `signup`. Print a `console.log` when the mutation runs successfully and show a message when it fails ([signup with error](./signup-errored.png)).

2. Connect the `SigninPage` with the Mutation `signin`. Print a `console.log` when the mutation runs successfully and show a message when it fails ([signin with error](./signin-errored.png)).

3. Adjust both mutations (on client side) to store the JWT and the user's information in the Local State.

4. Create a very simple page showing the current user's information. Redirect here after successfull authentication.
