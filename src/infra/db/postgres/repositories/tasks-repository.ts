import { TasksFinderRepository } from '@application/contracts/tasks'
import { TaskModel } from '@application/dtos'
import { getRepository } from 'typeorm'
import TaskEntity from '../entities/task'

class TasksRepository implements TasksFinderRepository {
  async findOne(id: string): Promise<TaskModel | undefined> {
    const repository = getRepository(TaskEntity)

    return repository.findOne(id)
  }

  async findMany(userId: string): Promise<TaskModel[]> {
    const repository = getRepository(TaskEntity)

    return repository.find({ where: { user: { id: userId } } })
  }
}

export default TasksRepository
