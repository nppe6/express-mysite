import express from 'express'
import { verifyToken } from '../middleware/jwt'
import blogTypeValidator from '../middleware/validator/blogType.validator'
import blogTypeController from '../controller/blogTypeController'
const blogtypeRouter = express.Router()

blogtypeRouter
  .post('/', verifyToken(), blogTypeValidator.blogType, blogTypeController.addBlogType)
  .get('/', blogTypeController.findAllBlogType)

export default blogtypeRouter
