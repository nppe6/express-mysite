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

const delBlogType = async (id: number) => {
  const data = await prisma.blogType.findFirst({ where: { id } })
  if (!data) throw new Error('该博客分类不存在')
  return await prisma.blogType.delete({ where: { id } })
}

// 根据id新增对应的文章博客分类
const addBlogToType = async (typeId: number) => {
  const data = await prisma.blogType.findFirst({ where: { id: typeId } })
  if (data) {
    await prisma.blogType.updateMany({
      where: { id: typeId },
      data: { articleCount: { increment: 1 } },
    })
    return
  }
}

export default {
  addBlogType,
  findAllBlogType,
  findOneBlogType,
  updateBlogType,
  delBlogType,
  addBlogToType,
}
