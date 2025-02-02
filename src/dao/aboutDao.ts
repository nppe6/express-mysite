import { aboutInput } from '../middleware/validator/about.validator'
import prisma from '../model/prisma'

// 获取关于我们url
const findAbout = async () => {
  return await prisma.about.findFirst({ where: {} })
}

// 设置关于我们url
const updateAbout = async (newAboutInfo: aboutInput) => {
  const data = await findAbout()
  if (!data) throw new Error('服务器错误数据查询失败 !')
  return await prisma.about.update({ where: { id: data.id }, data: newAboutInfo })
}

export default {
  findAbout,
  updateAbout,
}
