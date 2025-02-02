import express from 'express'
import commonRes from '../utils/commonRes'
import silentHandle from '../utils/silentHandle'
import aboutService from '../service/aboutService'

// 获取关于我们url
const findAbout = async (req: express.Request, res: express.Response) => {
  const [e, about] = await silentHandle(aboutService.findAbout, req.body)

  return e ? commonRes.error(res, null, e.message) : commonRes(res, about, { message: '获取成功' })
}

// 设置关于我们url
const updateAbout = async (req: express.Request, res: express.Response) => {
  const [e, about] = await silentHandle(aboutService.updateAbout, req.body)

  return e ? commonRes.error(res, null, e.message) : commonRes(res, about, { message: '修改成功' })
}

export default {
  findAbout,
  updateAbout,
}
