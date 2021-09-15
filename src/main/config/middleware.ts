import { Express } from 'express'
import { bodyParser, errorsHandler } from '@main/middleware'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(errorsHandler)
}
