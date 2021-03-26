[« Back](signup-mutation.md)

# JWT details

The JWT issued should include some of the user's fields in the payload (be sure to not include its password), and:

- expiration date: 10 days from the date it was issued;
- subject: user's id

For the encryption, let's use a secret for now. You can store it on environment variables (checkout [dotenv](https://www.npmjs.com/package/dotenv)).
