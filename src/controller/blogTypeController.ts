import express from 'express'
import silentHandle from '../utils/silentHandle'
import commonRes from '../utils/commonRes'
import blogTypeService from '../service/blogTypeService'

// 添加博客分类
const addBlogType = async (req: express.Request, res: express.Response) => {
  const [e, blogType] = await silentHandle(blogTypeService.addBlogType, req.body)

  return e ? commonRes.error(res, null, e.message) : commonRes(res, blogType, { message: '添加成功' })
}

// 获取博客分类
const findAllBlogType = async (req: express.Request, res: express.Response) => {
  const [e, blogType] = await silentHandle(blogTypeService.findAllBlogType, req.body)

  return e ? commonRes.error(res, null, e.message) : commonRes(res, blogType, { message: '获取成功' })
}

export default {
  addBlogType,
  findAllBlogType,
}
