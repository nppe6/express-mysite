import blogDao from '../dao/blogDao'
import blogTypeDao from '../dao/blogTypeDao'
import { BlogTypeInput } from '../middleware/validator/blogType.validator'

const addBlogType = async (blogType: BlogTypeInput) => {
  blogType.articleCount = 0
  const data = await blogTypeDao.addBlogType(blogType)

  return data
}

const findAllBlogType = async () => {
  const data = await blogTypeDao.findAllBlogType()
  data.sort((a, b) => a.order - b.order)

  return data
}

const findOneBlogType = async (typeId: number) => {
  const data = await blogTypeDao.findOneBlogType(typeId)

  return data
}

const updateBlogType = async (blogType: Array<unknown>) => {
  const typeId = blogType[0] as number
  const data = blogType[1] as Record<string, any>

  const result = await blogTypeDao.updateBlogType(typeId, data)

  return result
}

const delBlogType = async (typeId: number) => {
  // 删除该分类  以后 受到影响的文章数
  const count = await blogDao.blogCountByBlogType(typeId)
  // 执行删除 分类操作
  await blogTypeDao.delBlogType(typeId)
  // 返回 受到影响的文章数量
  return count
}

export default {
  addBlogType,
  findAllBlogType,
  findOneBlogType,
  updateBlogType,
  delBlogType,
}
