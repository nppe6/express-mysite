import { projectInput } from '../middleware/validator/project.validator'
import prisma from '../model/prisma'

// 获取所有项目
const findAllDemo = async () => {
  return await prisma.demo.findMany({ where: {} })
}

// 添加项目
const addDemo = async (newDemoInfo: projectInput) => {
  return await prisma.demo.create({ data: newDemoInfo })
}

export default {
  findAllDemo,
  addDemo,
}
