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

export default {
  addBlogType,
  findAllBlogType,
  findOneBlogType,
}
