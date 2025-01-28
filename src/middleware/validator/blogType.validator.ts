import { body } from 'express-validator'
import validate from './error.back'
import prisma from '../../model/prisma'

export interface BlogTypeInput {
  name: string
  articleCount: number
  order: number
}

const blogType = validate([
  body('name')
    .notEmpty()
    .withMessage('文章类型不能为空 ~')
    .custom(async (val) => {
      const blogType = await prisma.blogType.findFirst({ where: { name: val } })
      if (blogType) {
        return Promise.reject('该文章类型已存在')
      }
    })
    .bail(),
  body('order').notEmpty().withMessage('排序等级不能为空 ~').bail(),
])

export default {
  blogType,
}
