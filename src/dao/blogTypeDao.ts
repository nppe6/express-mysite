import { BlogTypeInput } from '../middleware/validator/blogType.validator'
import prisma from '../model/prisma'

const addBlogType = async (blogType: BlogTypeInput) => {
  return await prisma.blogType.create({
    data: blogType,
    // select: {
    //   id: true,
    //   name: true,
    //   articleCount: true,
    //   order: true,
    // },
  })
}

export default {
  addBlogType,
}
