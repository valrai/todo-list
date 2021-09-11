export default interface Database<T> {
  connect: () => Promise<T>
}
