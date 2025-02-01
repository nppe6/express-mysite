import { body } from 'express-validator'
import validate from './error.back'

export interface messageInput {
  nickname: string
  content: string
  createDate: string
  avatar: string
  blogId?: number | null
}

const message = validate([
  body('nickname').notEmpty().withMessage('名称不能为空 ~').bail(),
  body('content').notEmpty().withMessage('内容不能为空 ~').bail(),
])

export default {
  message,
}
