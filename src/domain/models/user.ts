import Role from '@src/domain/models/role'

type User = {
  id: string
  email: string
  username: string
  password: string
  roles: Role[]
  createdAt: Date
  updatedAt: Date
}

export default User
