import faker from 'faker'

import { TaskDto } from '@application/dtos'

type FakeTaskParams = {
  id?: string
  description?: string
  itIsDone?: boolean
  userId?: string
  createdAt?: Date
  updatedAt?: Date
}

export const makeFakeTaskDto = (params?: FakeTaskParams): TaskDto => ({
  id: faker.datatype.uuid(),
  description: faker.lorem.paragraph(),
  itIsDone: faker.datatype.boolean(),
  userId: faker.datatype.uuid(),
  createdAt: faker.datatype.datetime(),
  updatedAt: faker.datatype.datetime(),
  ...params,
})

export const makeFakeTasksDtos = (params: FakeTaskParams, amount = 2): Array<TaskDto> => {
  const tasks = []

  for (let index = 0; index < amount; index += 1) {
    const task = makeFakeTaskDto(params)
    tasks.push(task)
  }

  return tasks
}
