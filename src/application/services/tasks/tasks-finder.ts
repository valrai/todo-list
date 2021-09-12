import { TasksFinder } from '@domain/usecases/tasks'
import { Task } from '@src/domain/models'
import { TasksFinderRepository } from '@src/application/contracts/tasks'

export default class TasksFinderService implements TasksFinder {
  constructor(private readonly tasksFinderRepository: TasksFinderRepository) {}

  async findOne(id: string): Promise<Task | undefined> {
    return this.tasksFinderRepository.findOne(id)
  }

  async findMany(userId: string): Promise<Task[]> {
    return this.tasksFinderRepository.findMany(userId)
  }
}
