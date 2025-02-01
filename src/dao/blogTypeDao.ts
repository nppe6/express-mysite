import { BlogTypeInput } from '../middleware/validator/blogType.validator'
import prisma from '../model/prisma'
import logger from '../utils/logger'

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

// 对 文章的分类 id 进行 文章数量的自减操作 该操作 是删除文章时候 使用
const delArticleCount = async (categoryId: number) => {
  const category = await prisma.blogType.findFirst({
    where: { id: categoryId },
    select: { articleCount: true },
  })
  if (!category) {
    throw new Error('分类不存在')
  }

  if (category.articleCount <= 0) {
    throw new Error('articleCount 已经是 0，无需减少')
  }

  // 执行减一操作
  const result = await prisma.blogType.updateMany({
    where: { id: categoryId },
    data: { articleCount: { increment: -1 } },
  })

  logger.warn(`成功减少 articleCount，更新记录数：${result.count}`)
  return result
}

export default {
  addBlogType,
  findAllBlogType,
  findOneBlogType,
  updateBlogType,
  delBlogType,
  addBlogToType,
  delArticleCount,
}
