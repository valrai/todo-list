import { celebrate, Joi, Segments } from 'celebrate'
import { Router } from 'express'

import { adaptRoute } from '../adapters/express-route-adapter'
import { makeFindTasksController } from '../factories/controllers/tasks/find-tasks'

export default (router: Router): void => {
  router.get(
    '/tasks',
    celebrate({
      [Segments.QUERY]: Joi.object().keys({
        user_id: Joi.string().required().uuid(),
      }),
    }),
    adaptRoute(makeFindTasksController()),
  )
}
