import { Task } from '@domain/models'

export class TaskViewModel {
  constructor(params: TaskViewModel) {
    this.id = params.id
    this.description = params.description
    this.itIsDone = params.itIsDone
    this.createdAt = params.createdAt
    this.updatedAt = params.updatedAt
  }

  id: string

  description: string

  itIsDone: boolean

  createdAt: string

  updatedAt: string

  static map(task: Task): TaskViewModel {
    return {
      ...task,
      createdAt: task.createdAt.toISOString(),
      updatedAt: task.updatedAt.toISOString(),
    }
  }

  static mapCollection(tasks: Task[]) {
    return tasks.map(TaskViewModel.map)
  }
}
