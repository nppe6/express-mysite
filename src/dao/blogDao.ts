import { BlogInput, BlogToPage } from '../middleware/validator/blog.validator'
import prisma from '../model/prisma'

// 添加文章
const addBlog = async (newBlogInfo: BlogInput) => {
  return await prisma.blog.create({
    data: newBlogInfo,
  })
}

// 根据分页查询文章
const findBlogByPage = async (pageInfo: BlogToPage) => {
  if (pageInfo.categoryId) {
    // 查看是否有分类 id 有 我们就按照分类查询
    const [blogs, total] = await Promise.all([
      prisma.blog.findMany({
        include: {
          blogType: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        where: {
          categoryId: pageInfo.categoryId,
        },
        orderBy: {
          createAt: 'desc',
        },
        skip: (pageInfo.page * 1 - 1) * pageInfo.limit, // 分页：跳过 n 条
        take: pageInfo.limit * 1, // 取 n 条数据
      }),
      prisma.blog.count({
        where: {
          categoryId: pageInfo.categoryId,
        },
      }),
    ])

    return { rows: blogs, total }
  } else {
    // 否则就是按照 全部进行分页查询
    const [blogs, total] = await Promise.all([
      prisma.blog.findMany({
        include: {
          blogType: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        where: {},
        orderBy: {
          createAt: 'desc',
        },
        skip: (pageInfo.page * 1 - 1) * pageInfo.limit, // 分页：跳过 n 条
        take: pageInfo.limit * 1, // 取 n 条数据
      }),
      prisma.blog.count({
        where: {},
      }),
    ])

    return { rows: blogs, total }
  }
}

export default {
  addBlog,
  findBlogByPage,
}
