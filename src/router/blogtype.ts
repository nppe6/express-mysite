import express from 'express'
import { verifyToken } from '../middleware/jwt'
import blogTypeValidator from '../middleware/validator/blogType.validator'
import blogTypeController from '../controller/blogTypeController'
const blogtypeRouter = express.Router()

// 添加博客分类
blogtypeRouter.post('/', verifyToken(), blogTypeValidator.blogType, blogTypeController.addBlogType)

export default blogtypeRouter
