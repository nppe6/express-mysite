import express from 'express'
import commonRes from '../utils/commonRes'
import silentHandle from '../utils/silentHandle'
import uploadService from '../service/uploadService'

const upload = async (req: express.Request, res: express.Response) => {
  // 上传上来的文件 经过前一个 中间件的处理 默认会将信息存储在 req.files 里面
  // 因为 我前面使用的 是array 的方式 是可以支持一次性传 多个值
  // 但是我限定了 最大值 为 1 所以我们这里直接取第一个数组内容即可
  // console.log(req.files)

  const fileArray = req.files && Array.isArray(req.files) ? req.files[0].originalname.split('.') : undefined
  if (!fileArray) return commonRes.error(res, null, '未上传任何文件', 401)

  const fileType = fileArray[fileArray.length - 1]

  const [e, uploads] = await silentHandle(uploadService.upload, [req.files, fileType])

  return e ? commonRes.error(res, null, e.message) : commonRes(res, uploads, { message: '上传成功' })
}

export default {
  upload,
}
