import faker from 'faker'

import { UserDto } from '@application/dtos'

type FakeUserParams = {
  id?: string
  email?: string
  username?: string
  password?: string
  createdAt?: Date
  updatedAt?: Date
}

export const makeFakeUserDto = (params?: FakeUserParams): UserDto => ({
  id: faker.datatype.uuid(),
  email: faker.internet.email(),
  username: faker.internet.userName(),
  password: faker.internet.password(8, false),
  createdAt: faker.datatype.datetime(),
  updatedAt: faker.datatype.datetime(),
  ...params,
})

export const makeFakeUserDtos = (params?: FakeUserParams, amount = 2): Array<UserDto> => {
  const users = []

  for (let index = 0; index < amount; index += 1) {
    const user = makeFakeUserDto(params)
    users.push(user)
  }

  return users
}
