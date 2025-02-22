import express from 'express'
import { verifyToken } from '../middleware/jwt'
import blogController from '../controller/blogController'
import blogValidator from '../middleware/validator/blog.validator'
const blogRouter = express.Router()

blogRouter
  .post('/', verifyToken(), blogValidator.createBlog, blogController.addBlog)
  .get('/', blogController.findBlogByPage)
  .get('/:blogId', blogController.findOneBlog)
  .put('/:blogId', verifyToken(), blogValidator.createBlog, blogController.updateBlog)
  .delete('/:blogId', verifyToken(), blogController.delBlog)

export default blogRouter
