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
import * as bcrypt from 'bcrypt'
import TaskEntity from './task'

@Entity({ name: 'users' })
class UserEntity {
  constructor(userParams: UserEntity) {
    this.id = userParams.id
    this.username = userParams.username
    this.email = userParams.email
    this.password = userParams.password
    this.createdAt = userParams.createdAt
    this.updatedAt = userParams.updatedAt
    this.tasks = userParams.tasks
    this.passwordHash = bcrypt.hashSync(userParams.password, 10)
  }

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 100, type: 'varchar' })
  @IsDefined()
  @Length(3, 100)
  username: string

  @Column({ length: 200, type: 'varchar' })
  @Length(3, 200)
  @IsDefined()
  @IsEmail()
  email: string

  @MinLength(8)
  password: string

  @Column({ name: 'password_hash', type: 'varchar' })
  passwordHash: string

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: string

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: string

  @OneToMany(() => TaskEntity, (task) => task.user)
  tasks: TaskEntity[]

  @BeforeInsert()
  @BeforeUpdate()
  async validate(): Promise<void> {
    return validateOrReject(this)
  }
}

export default UserEntity
