import settingDao from '../dao/settingDao'
import { settingInput } from '../middleware/validator/setting.validator'

// 获取全局配置
const findAllSetting = async () => {
  const result = await settingDao.findAllSetting()

  return result
}

// 修改全局配置
const updateSetting = async (newSetting: settingInput) => {
  const result = await settingDao.updateSetting(newSetting)

  return result
}

export default {
  updateSetting,
  findAllSetting,
}
