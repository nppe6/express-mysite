import { messageInput, messagePage } from '../middleware/validator/message.validator'
import prisma from '../model/prisma'

// 添加留言或是评论
const addMessage = async (newMessage: messageInput) => {
  return await prisma.message.create({ data: newMessage })
}

// 分页获取留言或是评论
const findMessageByPage = async (pageInfo: messagePage) => {
  // 这里是根据 blogId进行区分看是 留言还是 评论
  if (pageInfo.blogId) {
    // 两种情况
    // 1、获取 所有的评论 pageInfo.blogId === -1
    // 2、以及 根据某篇文章获取对应的 评论
    if (pageInfo.blogId === -1) {
      const [messages, total] = await Promise.all([
        prisma.message.findMany({
          where: {
            blogId: {
              not: null, // 用于查找 blogId 不为 null 的记录
            },
          },
          include: {
            blog: true, // Prisma 使用模型名称直接嵌套来进行关联查询
          },
          skip: (pageInfo.page * 1 - 1) * pageInfo.limit, // 分页：跳过 n 条
          take: pageInfo.limit * 1, // 取 n 条数据
        }),
        prisma.message.count({
          where: {
            blogId: {
              not: null, // 用于查找 blogId 不为 null 的记录
            },
          },
        }),
      ])

      return { messages, total }
    } else {
      const [messages, total] = await Promise.all([
        prisma.message.findMany({
          where: {
            blogId: pageInfo.blogId * 1,
          },
          orderBy: {
            createAt: 'desc',
          },
          skip: (pageInfo.page * 1 - 1) * pageInfo.limit, // 分页：跳过 n 条
          take: pageInfo.limit * 1, // 取 n 条数据
        }),
        prisma.message.count({
          where: {
            blogId: pageInfo.blogId * 1,
          },
        }),
      ])

      return { messages, total }
    }
  } else {
    // 根据分页获取留言
    const [messages, total] = await Promise.all([
      prisma.message.findMany({
        where: {
          blogId: null,
        },
        orderBy: {
          createAt: 'desc',
        },
        skip: (pageInfo.page * 1 - 1) * pageInfo.limit, // 分页：跳过 n 条
        take: pageInfo.limit * 1, // 取 n 条数据
      }),
      prisma.message.count({
        where: {
          blogId: null,
        },
      }),
    ])

    return { messages, total }
  }
}

export default {
  addMessage,
  findMessageByPage,
}
