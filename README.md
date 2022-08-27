<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Run in development

Clonar el repositorio

## Installation

```bash
# ejecutar
$ npm install

# have Nest CLI installed
$ npm i -g @nestjs/cli
```

## Run the database

```bash
# docker command
docker-compose up -d
```
## Setting environment variables

Clonar el archivo __.env.template__ y renombrar la copia a __.env__

Llenar las variables de entorno definidas en el __.env__ 

## Running the app 

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stack used
* Postgres
* Nest

## Created by
Accenture <lodwin.zapata@accenture.com>