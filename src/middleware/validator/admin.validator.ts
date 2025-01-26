import { body } from 'express-validator'
import validate from './error.back'

export interface AdminInput {
  loginId: string
  loginPwd: string
  captcha: string
  remember: number
}

const login = validate([
  body('loginId')
    .notEmpty()
    .withMessage('账号不能为空 ~')
    .bail()
    .isLength({ min: 3 })
    .withMessage('账号最少为3个字符 ~')
    .bail(),
  body('loginPwd')
    .notEmpty()
    .withMessage('密码不能为空 ~')
    .bail()
    .isLength({ min: 6 })
    .withMessage('密码最少为6个字符 ~')
    .bail(),
])

export default {
  login: login,
}
