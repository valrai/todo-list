import 'module-alias/register'
import app from '@main/config/app'
import PostgresDatabase from '@infra/db/postgres/connection'
import env from '@main/config/env'

const bootstrap = async (): Promise<void> => {
  const database = new PostgresDatabase()

  database
    .connect()
    .then(async () => {
      app.listen(env.port, () => console.log(`server running at: ${env.base_url}:${env.port}/api`))
    })
    .catch((error) => {
      console.error(`failed to connect to database: ${error}`)
    })
}

bootstrap()
