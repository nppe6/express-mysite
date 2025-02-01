import express from 'express'
import silentHandle from '../utils/silentHandle'
import commonRes from '../utils/commonRes'
import projectService from '../service/projectService'

// 获取所有项目
const findAllDemo = async (req: express.Request, res: express.Response) => {
  const [e, demo] = await silentHandle(projectService.findAllDemo, req.body)

  return e ? commonRes.error(res, null, e.message) : commonRes(res, demo, { message: '获取成功' })
}

// 新增项目
const addDemo = async (req: express.Request, res: express.Response) => {
  const [e, demo] = await silentHandle(projectService.addDemo, req.body)

  return e ? commonRes.error(res, null, e.message) : commonRes(res, demo, { message: '添加成功' })
}
// 修改项目

// 删除项目

export default {
  findAllDemo,
  addDemo,
}
