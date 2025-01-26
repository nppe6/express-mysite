import express, { Express } from 'express'
import cors from 'cors'
import morgan from 'morgan'

function initMiddleware(app: Express) {
  app.use(express.json())
  app.use(express.urlencoded({ extended: false })) // 解析传入的数据格式

  app.use(cors())
  app.use(morgan('dev'))
  // 跨域 以及 日志信息打印
}

export default initMiddleware
