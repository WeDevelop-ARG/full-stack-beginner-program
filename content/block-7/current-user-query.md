[« Back](index.md)

# Current user query

## Type

```graphql
type Query {
  currentUser: User
}
```

## Resolver

After you've properly configured the `passport-jwt` middleware, you'll have a `user` object into your GraphQL `context`. So, the only thing you need to do here is to check if that user has something (which means that a valid JWT has been passed into the `Authorization` header) and return it. Otherwise, you'll return nothing, which means that there is no logged in user.

Remember that we're using a stateless authorization mechanism here, so the semantic of `user logged in` means `a valid JWT has been passed as a Bearer token into the Authorization HTTP header`.
