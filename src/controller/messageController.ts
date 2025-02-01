import express from 'express'
import commonRes from '../utils/commonRes'
import silentHandle from '../utils/silentHandle'
import messageService from '../service/messageService'

// 添加留言或评论
const addMessage = async (req: express.Request, res: express.Response) => {
  const [e, message] = await silentHandle(messageService.addMessage, req.body)

  return e ? commonRes.error(res, null, e.message) : commonRes(res, message, { message: '添加成功' })
}

// 分页获取留言或评论
const findMessageByPage = async (req: express.Request, res: express.Response) => {
  const [e, message] = await silentHandle(messageService.findMessageByPage, req.query)

  return e ? commonRes.error(res, null, e.message) : commonRes(res, message, { message: '获取成功' })
}

// 删除留言或评论
const delMessage = async (req: express.Request, res: express.Response) => {
  const [e, message] = await silentHandle(messageService.delMessage, Number(req.params.messageId))

  return e ? commonRes.error(res, null, e.message) : commonRes(res, null, { message: '删除成功' })
}

export default {
  addMessage,
  findMessageByPage,
  delMessage,
}
