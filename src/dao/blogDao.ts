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

// 根据 id 获取博客文章
const findBlogById = async (id: number) => {
  return await prisma.blog.findFirst({
    include: {
      blogType: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    where: { id },
    orderBy: {
      createAt: 'desc',
    },
  })
}

// 对 浏览数 进行增加处理
const addScanNum = async (id: number) => {
  await prisma.blog.update({ where: { id }, data: { scanNumber: { increment: 1 } } })
  return
}

// 根据 id 对博客文章进行修改
const updateBlog = async (id: number, newBlogInfo: BlogInput) => {
  return await prisma.blog.update({ where: { id }, data: newBlogInfo })
}

// 删除文章
const delBlog = async (id: number) => {
  return await prisma.blog.delete({ where: { id } })
}

// 对文章的评论数进行增加
const addCommentNum = async (id: number) => {
  return await prisma.blog.update({ where: { id }, data: { commentNumber: { increment: 1 } } })
}

// 根据博客分类 id  获取对应的文章数量
const blogCountByBlogType = async (categoryId: number) => {
  return await prisma.blog.count({
    where: {
      categoryId,
    },
  })
}

export default {
  addBlog,
  findBlogByPage,
  findBlogById,
  addScanNum,
  updateBlog,
  delBlog,
  addCommentNum,
  blogCountByBlogType,
}
