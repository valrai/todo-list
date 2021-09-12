export default interface TasksRemover {
  deleteOne: (id: string) => Promise<void>
}
