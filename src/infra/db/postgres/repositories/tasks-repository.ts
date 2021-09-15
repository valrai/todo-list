import { TasksFinderRepository } from '@application/contracts/tasks'
import { TaskDto } from '@application/dtos'
import { getRepository } from 'typeorm'
import TaskEntity from '../entities/task-entity'

class TasksRepository implements TasksFinderRepository {
  async findOne(id: string): Promise<TaskDto | undefined> {
    const repository = getRepository(TaskEntity)

    return repository.findOne(id)
  }

  async findMany(userId: string): Promise<TaskDto[]> {
    const repository = getRepository(TaskEntity)

    return repository.find({ where: { userId } })
  }
}

export default TasksRepository
