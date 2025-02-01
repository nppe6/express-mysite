import projectDao from '../dao/projectDao'
import { projectInput } from '../middleware/validator/project.validator'

// 获取所有项目
const findAllDemo = async () => {
  const result = await projectDao.findAllDemo()
  // 接下来就是 将 描述转换会成 数组的格式
  result.forEach((item) => (item.description = JSON.parse(item.description)))

  return result
}

// 添加项目
const addDemo = async (newDemoInfo: projectInput) => {
  // 首先就是 描述 我们传递 过来是一个数组 这时候我们需要转成字符串
  newDemoInfo.description = JSON.stringify(newDemoInfo.description)

  const result = await projectDao.addDemo(newDemoInfo)

  return [result]
}

export default {
  findAllDemo,
  addDemo,
}
