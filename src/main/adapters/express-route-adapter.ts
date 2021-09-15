import { Controller } from '@presentation/contracts/controller'
import { Request, Response } from 'express'
import env from '../config/env'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpResponse = await controller.handle(req)

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      res.status(httpResponse.statusCode).json({ data: httpResponse.data })
    } else {
      const isProduction = env.enviroment === 'prod'
      const error = isProduction ? httpResponse.data.message : httpResponse.data

      res.status(httpResponse.statusCode).json({ error })
    }
  }
}
