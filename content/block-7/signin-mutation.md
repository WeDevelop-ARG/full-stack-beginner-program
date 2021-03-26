[« Back](index.md)

# Signin mutation

## Type

```graphql
type SigninInput {
  username: String!
  password: String!
}

type Mutation {
  signin(data: SigninInput!): AuthenticationResult!
}
```

## Resolver

This mutation should:

1. search for the user by `username`, if exists:
2. issue a JWT that the user will use in further requests;
3. return an `AuthenticationResult` object, including the user and the jwt.

In case of any error just put the error message into the `authError` field of the `AuthenticationResult` object, and let `user` and `jwt` empty.
