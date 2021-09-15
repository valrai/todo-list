import { TaskDto } from '@application/dtos'

export default interface TasksFinderRepository {
  findOne: (id: string) => Promise<TaskDto | undefined>
  findMany: (userId: string) => Promise<TaskDto[]>
}
