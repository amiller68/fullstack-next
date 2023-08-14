# Fullstack NextJs Boilerplate

Example NextJs project with a fullstack setup Sequelize, React, and Sqlite.
Which is really all you need to do most things.

Because this project uses sqlite, it will not work on Vercel out of the box. If You want to host your project on Vercel, you will need to use a different backend than implemented here. Sequelize supports many different databases, so you can use any of those.

This project is a good choice for any of three use cases:
- You want to hack a local demo together quickly, and you're familiar with React and SQL 🙂
- You want to ship a quick project to production on something like an EC2 instance, and don't care if it scales 🤷‍♂️
- You want to use this project as a starting off point for a production project, in which you feel confident in your abilities to implement build pipelines, manage kubernetes, and deploy to the cloud 🥴

Option 2 can be very annoying, but promising way to start a private project or launch a demo, but it's alot easier with terraform. I'm looking to add examples of how to do this in the future.=. Here's an example of how to do this with terraform and AWS in the meantime: https://github.com/banyancomputer/compliance-backend

## Install dependencies

```bash
yarn install
```

## Run the dev server

```bash
yarn dev
```

## Run the linting and formatting checks

```bash
yarn lint
```

## Build the project

```bash
yarn build
```

## Run the project in production mode

```bash
yarn start
```

<!-- TODO: DOCKER docs -->
