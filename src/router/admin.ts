import { Router } from 'express'
import adminController from '../controller/adminController'
import adminValidator from '../middleware/validator/admin.validator'

const adminRouter = Router()

adminRouter.post('/login', adminValidator.login, adminController.login)

export default adminRouter
