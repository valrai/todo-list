import { IsDefined, validateOrReject } from 'class-validator'
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import UserEntity from './user-entity'

@Entity({ name: 'tasks' })
class TaskEntity {
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
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: UserEntity

  @Column({ name: 'user_id', type: 'uuid' })
  userId: string

  @BeforeInsert()
  @BeforeUpdate()
  async validate(): Promise<void> {
    return validateOrReject(this)
  }
}

export default TaskEntity
