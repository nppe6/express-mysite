import { BlogInput } from '../middleware/validator/blog.validator'
import prisma from '../model/prisma'

const addBlog = async (newBlogInfo: BlogInput) => {
  return await prisma.blog.create({
    data: newBlogInfo,
  })
}

export default {
  addBlog,
}
