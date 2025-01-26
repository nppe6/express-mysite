import bannerDao from '../dao/bannerDao'
import { updateBannerInput } from '../middleware/validator/banner.validator'

const findBanner = async () => {
  const data = await bannerDao.findBanner()

  return data
}

const updateBanner = async (bannerArr: Array<unknown>) => {
  const bannerId = Number(bannerArr[0])
  const banner = bannerArr[1] as updateBannerInput
  const data = await bannerDao.updateBanner(bannerId, banner)

  return data
}

export default {
  findBanner,
  updateBanner,
}
