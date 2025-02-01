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

// 修改项目
const updateDemo = async (id: number, newDemoInfo: projectInput) => {
  return await prisma.demo.update({ where: { id }, data: newDemoInfo })
}

// 删除项目
const delDemo = async (id: number) => {
  const data = await prisma.demo.findFirst({ where: { id } })
  if (!data) throw new Error('删除的项目 id 不存在')
  return await prisma.demo.delete({ where: { id } })
}

export default {
  findAllDemo,
  addDemo,
  updateDemo,
  delDemo,
}
