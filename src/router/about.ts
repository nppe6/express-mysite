import { Router } from 'express'
import { verifyToken } from '../middleware/jwt'
import aboutController from '../controller/aboutController'
import aboutValidator from '../middleware/validator/about.validator'
const aboutRouter = Router()

aboutRouter
  .get('/', aboutController.findAbout)
  .post('/', verifyToken(), aboutValidator.about, aboutController.updateAbout)

export default aboutRouter
