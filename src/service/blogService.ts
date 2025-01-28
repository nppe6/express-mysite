import blogDao from '../dao/blogDao'
import blogTypeDao from '../dao/blogTypeDao'
import { BlogInput } from '../middleware/validator/blog.validator'

const addBlog = async (newBlogInfo: BlogInput) => {
  // 先将 toc 转成字符串 这部分代码 下节写
  newBlogInfo.toc = JSON.stringify('["a","b"]')
  newBlogInfo.scanNumber = 0 // 阅读量初始化 为 0,
  newBlogInfo.commentNumber = 0 // 评论数初始化 为 0

  const data = await blogDao.addBlog(newBlogInfo)
  // 这一步操作就是 当我文章添加了 对应的文章分类也应该需要增加
  await blogTypeDao.addBlogToType(data.categoryId)
  return data
}

const findAllBlog = async () => {}

const findOneBlog = async (blogId: number) => {}

const updateBlog = async (blog: Array<unknown>) => {
  const blogId = blog[0] as number
  const data = blog[1] as Record<string, any>
}

const delBlog = async (blogId: number) => {}

export default {
  addBlog,
  findAllBlog,
  findOneBlog,
  updateBlog,
  delBlog,
}
