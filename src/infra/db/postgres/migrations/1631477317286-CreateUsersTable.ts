import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateUsersTable1631477317286 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'email',
            type: 'varchar(200)',
            isUnique: true,
            comment: 'User email address',
          },
          {
            name: 'username',
            type: 'varchar(100)',
            isUnique: true,
            comment: 'User nickname',
          },
          {
            name: 'password',
            type: 'varchar',
            comment: 'User encrypted password',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }
}
