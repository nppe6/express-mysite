import aboutDao from '../dao/aboutDao'
import { aboutInput } from '../middleware/validator/about.validator'

// 获取关于我们url
const findAbout = async () => {
  const result = await aboutDao.findAbout()
  return result
}

// 设置关于我们url
const updateAbout = async (newAboutInfo: aboutInput) => {
  const result = await aboutDao.updateAbout(newAboutInfo)
  return result
}

export default {
  findAbout,
  updateAbout,
}
