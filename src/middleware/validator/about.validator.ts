import { body } from 'express-validator'
import validate from './error.back'

export interface aboutInput {
  url: string
}

const about = validate([body('url').notEmpty().withMessage('地址不能为空')])

export default {
  about,
}
