import express from 'express'
import silentHandle from '../utils/silentHandle'
import bannerService from '../service/bannerService'
import commonRes from '../utils/commonRes'

// 获取首页标语列表
const findBanner = async (req: express.Request, res: express.Response) => {
  const [e, banner] = await silentHandle(bannerService.findBanner, req.body)

  return e ? commonRes.error(res, null, e.message) : commonRes(res, banner)
}

// 修改单个 id 标语
const updateBanner = async (req: express.Request, res: express.Response) => {
  const { bannerId } = req.params
  const [e, banner] = await silentHandle(bannerService.updateBanner, [bannerId, req.body])

  return e ? commonRes.error(res, null, e.message) : commonRes(res, banner, { message: '修改成功' })
}

export default {
  findBanner,
  updateBanner,
}
