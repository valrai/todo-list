import TasksFinderService from '@application/services/tasks/tasks-finder'
import TasksRepository from '@infra/db/postgres/repositories/tasks-repository'
import { Controller } from '@presentation/contracts/controller'
import { FindTasksController } from '@presentation/controllers/tasks'

export const makeFindTasksController = (): Controller => {
  const repo = new TasksRepository()
  const service = new TasksFinderService(repo)

  return new FindTasksController(service)
}
