import { IsDefined, IsEmail, Length, MinLength, validateOrReject } from 'class-validator'
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import TaskEntity from './task-entity'

@Entity({ name: 'users' })
class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 100, type: 'varchar', unique: true })
  @IsDefined()
  @Length(3, 100)
  username: string

  @Column({ length: 200, type: 'varchar', unique: true })
  @Length(3, 200)
  @IsDefined()
  @IsEmail()
  email: string

  @MinLength(8)
  @Column({ name: 'password', type: 'varchar' })
  password: string

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date

  @OneToMany(() => TaskEntity, (task) => task.user)
  tasks: TaskEntity[]

  @BeforeInsert()
  @BeforeUpdate()
  async validate(): Promise<void> {
    return validateOrReject(this)
  }
}

export default UserEntity
