import express from 'express'
import silentHandle from '../utils/silentHandle'
import commonRes from '../utils/commonRes'
import blogService from '../service/blogService'

// 添加博客
const addBlog = async (req: express.Request, res: express.Response) => {
  const [e, blog] = await silentHandle(blogService.addBlog, req.body)

  return e ? commonRes.error(res, null, e.message) : commonRes(res, blog, { message: '添加成功' })
}

// 根据分页查询文章数据
const findBlogByPage = async (req: express.Request, res: express.Response) => {
  const [e, blog] = await silentHandle(blogService.findBlogByPage, req.query)

  return e ? commonRes.error(res, null, e.message) : commonRes(res, blog, { message: '获取成功' })
}

// 获取单个博客文章数据
const findOneBlog = async (req: express.Request, res: express.Response) => {
  const reqHeaders = req.headers
  const [e, blog] = await silentHandle(blogService.findOneBlog, [Number(req.params.blogId), reqHeaders.authorization])

  return e ? commonRes.error(res, null, e.message) : commonRes(res, blog, { message: '获取成功' })
}

// 修改博客文章
const updateBlog = async (req: express.Request, res: express.Response) => {
  const [e, blog] = await silentHandle(blogService.updateBlog, [Number(req.params.blogId), req.body])

  return e ? commonRes.error(res, null, e.message) : commonRes(res, blog, { message: '修改成功' })
}

// 删除博客分类
const delBlog = async (req: express.Request, res: express.Response) => {
  const [e, blog] = await silentHandle(blogService.delBlog, Number(req.params.typeId))

  return e ? commonRes.error(res, null, e.message) : commonRes(res, null, { message: '删除成功' })
}

export default {
  addBlog,
  findBlogByPage,
  findOneBlog,
  updateBlog,
  delBlog,
}
