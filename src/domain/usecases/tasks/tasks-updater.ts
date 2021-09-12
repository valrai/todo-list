import { Task } from '@src/domain/models'

export default interface TasksUpdater {
  updateOne: (id: string, task: Task) => Promise<Task>
}
