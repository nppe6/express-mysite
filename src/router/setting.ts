import { Router } from 'express'
import settingController from '../controller/settingController'
import { verifyToken } from '../middleware/jwt'
const settingRouter = Router()

settingRouter.get('/', settingController.findAllSetting).put('/', verifyToken(), settingController.updateSetting)

export default settingRouter
