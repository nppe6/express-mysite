import { body } from 'express-validator'
import validate from './error.back'
import prisma from '../../model/prisma'

export interface BlogInput {
  title: string
  description: string
  toc: string
  htmlContent: string
  thumb: string
  scanNumber: number
  commentNumber: number
  categoryId: number
  markdownContent?: string
}

export interface BlogToPage {
  page: number
  limit: number
  keyword: string
  categoryId: number | undefined
}

const createBlog = validate([
  body('title')
    .notEmpty()
    .withMessage('文章标题不能为空 ~')
    .isLength({ max: 22 })
    .withMessage('文章标题最多为22个字符 ~')
    .bail(),
  body('description').notEmpty().withMessage('描述不能为空 ~').bail(),
  body('toc').notEmpty().withMessage('目录不能为空 ~').bail(),
  body('htmlContent').notEmpty().withMessage('HTML 内容不能为空 ~').bail(),
  body('thumb').notEmpty().withMessage('缩略图不能为空 ~').bail(),
  // body('scanNumber').notEmpty().withMessage('浏览数不能为空 ~').bail(),
  // body('commentNumber').notEmpty().withMessage('评论数不能为空 ~').bail(),
  body('categoryId')
    .notEmpty()
    .withMessage('分类 ID不能为空 ~')
    .custom(async (val) => {
      const categoryId = await prisma.blogType.findFirst({ where: { id: val } })
      if (!categoryId) {
        return Promise.reject('该文章类型id不存在')
      }
    })
    .bail(),
])

export default {
  createBlog,
}
