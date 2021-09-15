import { TasksFinderRepository } from '@application/contracts/tasks'
import { TaskDto } from '@application/dtos'
import { makeFakeTaskDto, makeFakeTasksDtos } from '@tests/shared/factories/dtos/task'

class FakeTasksRepository implements TasksFinderRepository {
  async findOne(id: string): Promise<TaskDto | undefined> {
    return makeFakeTaskDto({ id })
  }

  async findMany(userId: string): Promise<TaskDto[]> {
    return makeFakeTasksDtos({ userId })
  }
}

export default FakeTasksRepository
