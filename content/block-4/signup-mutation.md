[« Back](index.md)

# Signup mutation

## Type

```graphql
type SignupInput {
  firstName: String!
  lastName: String!
  username: String!
  password: String!
}

type AuthenticationResult {
  user: User
  jwt: String
  authError: String
}

type Mutation {
  signup(data: SignupInput!): AuthenticationResult!
}
```

## Resolver

This mutation should:

1. create the user if it doesn't exist;
2. issue a JWT that the user will use in further requests ([JWT details here](jwt-details.md)).
3. return an `AuthenticationResult` object, including the user and the jwt.

In case of any error just put the error message into the `authError` field of the `AuthenticationResult` object, and let `user` and `jwt` empty.
