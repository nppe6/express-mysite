import express from 'express'
import { verifyToken } from '../middleware/jwt'
import projectValidator from '../middleware/validator/project.validator'
import projectController from '../controller/projectController'

const projectRouter = express.Router()
projectRouter
  .get('/', projectController.findAllDemo)
  .post('/', verifyToken(), projectValidator.project, projectController.addDemo)
  .put('/:demoId')
  .delete('/:demoId')

export default projectRouter
