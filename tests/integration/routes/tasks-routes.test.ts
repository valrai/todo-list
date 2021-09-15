import request from 'supertest'
import faker from 'faker'

import app from '@main/config/app'
import PostgresDatabase from '@infra/db/postgres/connection'
import { TaskEntity, UserEntity } from '@infra/db/postgres/entities'
import { makeFakeTaskDto } from '@tests/shared/factories/dtos/task'
import { makeFakeUserDtos } from '@tests/shared/factories/dtos/user'
import { insertManyMocks } from '@tests/shared/helpers'

const database = new PostgresDatabase()
let fakeUserId: string

const insertFakeRecords = async () => {
  const fakeUsers = makeFakeUserDtos()
  const [firstUser, secondUser] = await insertManyMocks(UserEntity, fakeUsers)

  const firstTaskDto = makeFakeTaskDto({ userId: firstUser.id })
  const secondTaskDto = makeFakeTaskDto({ userId: secondUser.id })
  const thirdTaskDto = makeFakeTaskDto({ userId: firstUser.id })

  fakeUserId = firstUser.id
  await insertManyMocks(TaskEntity, [firstTaskDto, secondTaskDto, thirdTaskDto])
}

describe('tasks', () => {
  beforeAll(async () => {
    await database.connect()
    await insertFakeRecords()
  })

  afterAll(async () => {
    await database.closeConnection()
  })

  describe('GET /tasks', () => {
    it('Should return all tasks of the given user', () => {
      return request(app)
        .get('/api/tasks')
        .query({ user_id: fakeUserId })
        .set('Accept', 'application/json')
        .expect(200)
        .then((res) => {
          expect(res.body.data).toHaveLength(2)
        })
    })

    it('Should return a empty array if no tasks is found for the given user', () => {
      const randomId = faker.datatype.uuid()

      return request(app)
        .get('/api/tasks')
        .query({ user_id: randomId })
        .set('Accept', 'application/json')
        .expect(200)
        .then((res) => {
          expect(res.body.data).toHaveLength(0)
        })
    })

    it('Should require a user_id parameter', () => {
      return request(app)
        .get('/api/tasks')
        .set('Accept', 'application/json')
        .expect(400)
        .then((res) => {
          expect(res.body.message).toEqual('Validation failed')
        })
    })
  })
})
