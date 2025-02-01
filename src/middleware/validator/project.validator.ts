import { body } from 'express-validator'
import validate from './error.back'

export interface projectInput {
  name: string
  url: string
  github: string
  description: string
  thumb: string
  order: number
}

const project = validate([
  body('name').notEmpty().withMessage('项目名称不能为空 ~').bail(),
  body('description').notEmpty().withMessage('描述不能为空 ~').bail(),
  body('github').notEmpty().withMessage('项目地址不能为空 ~').bail(),
  body('url').notEmpty().withMessage('项目地址不能为空 ~').bail(),
  body('thumb').notEmpty().withMessage('缩略图不能为空 ~').bail(),
  body('order')
    .notEmpty()
    .withMessage('排序字段不能为空 ~')
    .bail() // 检查是否为空
    .isNumeric()
    .withMessage('排序字段必须是大于等于 0 的整数 ~') // 检查是否为整数
    .toInt(), // 将字符串转换为整数
])

export default {
  project,
}
