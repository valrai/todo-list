import express from 'express'
import middleware from './middleware'
import routes from './routes'

const app = express()
routes(app)
middleware(app)

export default app
