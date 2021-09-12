import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeFindTasksController } from '../factories/controllers/tasks/find-tasks'

export default (router: Router): void => {
  router.get('/tasks', adaptRoute(makeFindTasksController()))
}
