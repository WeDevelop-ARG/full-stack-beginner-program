[« Back](index.md)

# passport-jwt details

You'll have to configure the `passport-jwt` middleware to extract the JWT from every request. Your server's clients will include the JWT in the `Authorization` header as a Bearer token, like this: `Authorization: Bearer xxxxx.yyyyy.zzzzz`. This middleware's task is to extract this information, validate the JWT and return a `User` object.

Let's recap:

1. Extract the JWT from the `Authorization` HTTP header;
2. validate the JWT;
3. find the user by `sub` (user's id);
4. return this user object.

After doing this, your `req` object will include a `user` object with the current user. But GraphQL doesn't know everything about this yet, so you'll have to configure your GraphQL to have a _context_. Read [this](https://www.apollographql.com/docs/apollo-server/features/authentication).

Remember that you're serving GraphQL on top of Express, and using Passport as a middleware.
