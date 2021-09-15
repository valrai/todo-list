import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class CreateTasksTable1631478075217 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tasks',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'description',
            type: 'varchar(400)',
            comment: 'Description of the task to be done',
          },
          {
            name: 'it_is_done',
            type: 'boolean',
            default: false,
            comment: 'Flag to indicate if the task is done',
          },
          {
            name: 'user_id',
            type: 'uuid',
            isNullable: false,
            comment: 'Task owner id',
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

    await queryRunner.createForeignKey(
      'tasks',
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tasks')
  }
}
