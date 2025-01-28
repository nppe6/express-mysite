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

const findAllBlogType = async () => {
  return await prisma.blogType.findMany({ where: {} })
}

const findOneBlogType = async (id: number) => {
  return await prisma.blogType.findFirst({ where: { id } })
}

const updateBlogType = async (id: number, data: any) => {
  return await prisma.blogType.update({ where: { id }, data })
}

export default {
  addBlogType,
  findAllBlogType,
  findOneBlogType,
  updateBlogType,
}
