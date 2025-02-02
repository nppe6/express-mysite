import express from 'express'
import commonRes from '../utils/commonRes'
import silentHandle from '../utils/silentHandle'
import settingService from '../service/settingService'

// 获取全局配置
const findAllSetting = async (req: express.Request, res: express.Response) => {
  const [e, setting] = await silentHandle(settingService.findAllSetting, req.body)

  return e ? commonRes.error(res, null, e.message) : commonRes(res, setting, { message: '获取成功' })
}

// 修改全局配置
const updateSetting = async (req: express.Request, res: express.Response) => {
  const [e, setting] = await silentHandle(settingService.updateSetting, req.body)

  return e ? commonRes.error(res, null, e.message) : commonRes(res, setting, { message: '修改成功' })
}

export default {
  updateSetting,
  findAllSetting,
}
