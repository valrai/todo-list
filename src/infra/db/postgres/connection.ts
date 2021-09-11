import { Connection, ConnectionOptions, createConnection } from 'typeorm'
import connectionOptions from '@infra/db/postgres/ormconfig'
import { Database } from '@infra/contracts'

class PostgresDatabase implements Database<Connection> {
  async connect(): Promise<Connection> {
    return createConnection(connectionOptions as ConnectionOptions)
  }
}

export default PostgresDatabase
