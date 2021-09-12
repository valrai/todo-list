import { TaskDto } from '@src/application/dtos/task'

export default interface TasksFinderRepository {
  findOne: (id: string) => Promise<TaskDto | undefined>
  findMany: (userId: string) => Promise<TaskDto[]>
}
