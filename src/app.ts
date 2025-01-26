import express from 'express'
import routes from './router'
import logger from './utils/logger'
import config from 'config'
import initMiddleware from './middleware'
const app = express()
// 挂载中间件
initMiddleware(app)

const PORT = config.get<number>('port')

app.listen(PORT, () => {
  logger.info(`App is running at http://127.0.0.1:${PORT}`)

  routes(app)
})
