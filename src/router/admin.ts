import { Router } from 'express'
import adminController from '../controller/adminController'
import adminValidator from '../middleware/validator/admin.validator'
import { verifyToken } from '../middleware/jwt'

const adminRouter = Router()

adminRouter
  .post('/login', adminValidator.login, adminController.login)
  .get('/whoami', verifyToken(), adminController.whoami)

export default adminRouter
