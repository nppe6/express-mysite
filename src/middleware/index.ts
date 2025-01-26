import express, { Express } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import session from 'express-session'
import config from 'config'

function initMiddleware(app: Express) {
  app.use(express.json())
  app.use(express.urlencoded({ extended: false })) // 解析传入的数据格式

  // 跨域 以及 日志信息打印
  app.use(cors())
  app.use(morgan('dev'))

  // session 配置
  app.use(
    session({
      secret: config.get<string>('session_secret'),
      resave: true,
      saveUninitialized: true,
    }),
  )
}

export default initMiddleware
