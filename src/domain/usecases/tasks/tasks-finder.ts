import { Task } from '@src/domain/models'

export default interface TasksFinder {
  findOne: (id: string) => Promise<Task | undefined>
  findMany: (userId: string) => Promise<Task[]>
}
