import express from 'express'
import { verifyToken } from '../middleware/jwt'
import blogController from '../controller/blogController'
import blogValidator from '../middleware/validator/blog.validator'
const blogRouter = express.Router()

blogRouter
  .post('/', verifyToken(), blogValidator.createBlog, blogController.addBlog)
  .get('/', blogController.findBlogByPage)
  .get('/:typeId')
  .put('/:typeId', verifyToken())
  .delete('/:typeId', verifyToken())

export default blogRouter
