import blogTypeDao from '../dao/blogTypeDao'
import { BlogTypeInput } from '../middleware/validator/blogType.validator'

const addBlogType = async (blogType: BlogTypeInput) => {
  blogType.articleCount = 0
  const data = await blogTypeDao.addBlogType(blogType)

  return data
}

export default {
  addBlogType,
}
