createdb warmup
yarn
knex migrate:latest
knex seed:run
