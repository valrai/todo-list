import { Connection, ConnectionOptions, createConnection, getConnectionManager } from 'typeorm'
import connectionOptions from '@infra/db/postgres/ormconfig'
import { Database } from '@infra/contracts'
import env from '@src/main/config/env'

class PostgresDatabase implements Database<Connection> {
  private connection: Connection

  get isConnected(): boolean {
    return this.connection.isConnected
  }

  async connect(): Promise<Connection> {
    const hasConnection = getConnectionManager().has('default')

    if (!hasConnection) {
      this.connection = await createConnection(connectionOptions as ConnectionOptions)
    }

    if (!this.connection.isConnected) {
      await this.connection.connect()
    }

    return this.connection
  }

  async closeConnection(): Promise<void> {
    this.connection.close()
  }

  async clear(): Promise<void> {
    if (env.enviroment !== 'prod') {
      const entities = this.connection.entityMetadatas

      const entityDeletionPromises = entities.map((entity) => async () => {
        const repository = this.connection.getRepository(entity.name)
        await repository.query(`DELETE FROM ${entity.tableName}`)
      })

      await Promise.all(entityDeletionPromises)
    }
  }
}

export default PostgresDatabase
