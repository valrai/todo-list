import { IsDefined, validateOrReject } from 'class-validator'
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import UserEntity from './user'

@Entity({ name: 'tasks' })
class TaskEntity {
  constructor(taskParams: TaskEntity) {
    this.id = taskParams.id
    this.description = taskParams.description
    this.itIsDone = taskParams.itIsDone
    this.createdAt = taskParams.createdAt
    this.updatedAt = taskParams.updatedAt
    this.user = taskParams.user
  }

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 400, type: 'varchar' })
  @IsDefined()
  description: string

  @Column({ name: 'it_is_done', default: false, type: 'boolean' })
  @IsDefined()
  itIsDone: boolean

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date

  @ManyToOne(() => UserEntity, (user) => user.tasks)
  user: UserEntity

  @BeforeInsert()
  @BeforeUpdate()
  async validate(): Promise<void> {
    return validateOrReject(this)
  }
}

export default TaskEntity
