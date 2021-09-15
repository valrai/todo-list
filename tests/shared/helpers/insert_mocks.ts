import { DeepPartial, EntityTarget, getRepository } from 'typeorm'

export async function insertOneMock<Entity>(entityClass: EntityTarget<Entity>, mock: DeepPartial<Entity>) {
  const repository = getRepository(entityClass)
  const entity = repository.create(mock)

  return repository.save(entity)
}

export async function insertManyMocks<Entity>(entityClass: EntityTarget<Entity>, mocks: DeepPartial<Entity>[]) {
  const repository = getRepository(entityClass)
  const entities = repository.create(mocks)

  return repository.save(entities)
}
