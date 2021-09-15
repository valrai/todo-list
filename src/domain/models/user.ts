import { Task } from '.'

type User = {
  id: string
  email: string
  username: string
  password: string
  tasks?: Task[]
  createdAt: Date
  updatedAt: Date
}

export default User
