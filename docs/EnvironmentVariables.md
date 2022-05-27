# Environment Variables

Before getting started with development, make sure you have all of your environment variables configured correctly.

Getting Started:

- You need to copy over `.env.example` to your local `.env` file (reminder to **never** commit your `.env` to GitHub), you can make this copy by executing this command in your terminal -

```bash
cp .env.example .env
```

Variables:

Most of the variables are setup and ready for you to start development. The only ones you will absolutely need to setup are the specific OAuth credentials that you are going to be using for [next-auth](https://next-auth.js.org/).

- `NEXTAUTH_SECRET` is a random unique string.

- `NEXTAUTH_URL` is the [canonical URL of your site](https://next-auth.js.org/configuration/options) and is used for production.

- `DATABASE_URL` is set to your DB URL (it is currently set to the [Docker](./Docker.md) postgres URL)

For random string, I recommend using at least 32 characters, and make sure to change the string that is set in the `.env.example`. Here are some methods to generating a 32 character unique string:

- [https://generate.plus/en/base64](https://generate.plus/en/base64)
- Run `openssl rand -base64 32` in your terminal
