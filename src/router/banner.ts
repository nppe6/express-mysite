import { Router } from 'express'
import bannerController from '../controller/bannerController'
import bannerValidator from '../middleware/validator/banner.validator'
import { verifyToken } from '../middleware/jwt'
const bannerRouter = Router()

bannerRouter
  .get('/', bannerController.findBanner)
  .post('/:bannerId', verifyToken(), bannerValidator.banner, bannerController.updateBanner)

export default bannerRouter
