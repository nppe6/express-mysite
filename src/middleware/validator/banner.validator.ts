import { body } from 'express-validator'
import validate from './error.back'

export interface updateBannerInput {
  midImg: string
  bigImg: string
  title: string
  description: string
}

const banner = validate([
  body('midImg').notEmpty().withMessage('不能为空 ~').bail(),
  body('bigImg').notEmpty().withMessage('不能为空 ~').bail(),
  body('title').notEmpty().withMessage('标题不能为空 ~').bail(),
  body('description').notEmpty().withMessage('说明不能为空 ~').bail(),
])

export default {
  banner,
}
