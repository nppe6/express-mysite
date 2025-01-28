import blogTypeDao from '../dao/blogTypeDao'
import { BlogTypeInput } from '../middleware/validator/blogType.validator'

const addBlogType = async (blogType: BlogTypeInput) => {
  blogType.articleCount = 0
  const data = await blogTypeDao.addBlogType(blogType)

  return data
}

const findAllBlogType = async (blogType: BlogTypeInput) => {
  const data = await blogTypeDao.findAllBlogType()
  data.sort((a, b) => a.order - b.order)

  return data
}

export default {
  addBlogType,
  findAllBlogType,
}
