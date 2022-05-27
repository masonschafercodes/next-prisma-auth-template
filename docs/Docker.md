# Local Docker
this template uses `docker-compose` to help you manage your local development, and easily spin up a local database so you can start development quickly.

## Resetting the Data in Docker
---
Run the following command to shutdown the dev database and remove the data.
```bash
docker-compose down --volumes
```
After you reset, you will want to re-run the migration to bring your database back to a useable state.
```bash
yarn prisma migrate dev
```