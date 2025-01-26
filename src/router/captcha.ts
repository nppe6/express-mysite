import { Router } from 'express'
import captchaController from '../controller/captchaController'
const captchaRouter = Router()

captchaRouter.get('/captcha', captchaController.getCaptcha)

export default captchaRouter
