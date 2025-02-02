import { settingInput } from '../middleware/validator/setting.validator'
import prisma from '../model/prisma'

// 获取全局设置
const findAllSetting = async () => {
  return await prisma.setting.findFirst({ where: {} })
}

// 修改全局设置
const updateSetting = async (newSetting: settingInput) => {
  const data = await findAllSetting()
  if (!data) throw new Error('服务器查询数据库错误 ！')
  return await prisma.setting.update({
    where: {
      id: data.id,
    },
    data: newSetting,
  })
}

export default {
  findAllSetting,
  updateSetting,
}
