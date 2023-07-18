# Reservation Management example

Thanks to Contember platform you can change anything. If you have any questions, we're happy to help in [Github Discussions](https://github.com/orgs/contember/discussions/categories/support).

## How to use this example

You'll need:

- NPM version 7+ (you can check using `npm --version`)
- [Docker](https://docs.docker.com/get-docker/)

### 🚀 Run Reservation Management locally

1. Clone this example

```bash
npx degit contember/examples/reservation-management reservation-management
```

2. Go to reservation-management

```bash
cd reservation-management
```

3. Install dependencies:

```bash
npm install
```

4. Start project:

```bash
npm start
```

This command will start Admin application and all docker containers (Contember Engine, Postgres, S3, Mailhog and Adminer). When you are done developing, you can stop docker containers by `docker-compose down`.

_Congratulations, you're done!_

Administration UI is now running at http://localhost:1480 and frontend website is running at http://localhost:3000.

### 🎢 Deploy

Api and Admin can be deployed to Contember Cloud. See [Deploy to Contember Cloud](https://docs.contember.com/guides/deploy-contember).
