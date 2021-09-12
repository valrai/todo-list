import { Task } from '@src/domain/models'

export default interface TasksCreator {
  createOne: () => Promise<Task>
}
