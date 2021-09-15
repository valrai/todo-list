import env from '@main/config/env'
import path from 'path'

export default {
  name: 'default',
  type: 'postgres',
  host: env.databases.postgres.host,
  port: env.databases.postgres.port,
  username: env.databases.postgres.user,
  password: env.databases.postgres.password,
  database: env.databases.postgres.database,
  dropSchema: env.enviroment === 'test',
  migrationsRun: env.enviroment === 'test',
  entities: [path.resolve(__dirname, './entities/**/*-entity{.ts,.js}')],
  migrations: [path.resolve(__dirname, './migrations/*{.ts,.js}')],
  cli: {
    migrationsDir: 'src/infra/db/postgres/migrations',
    entitiesDir: 'src/infra/db/postgres/entities',
  },
}
