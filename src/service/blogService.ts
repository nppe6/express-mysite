import blogDao from '../dao/blogDao'
import blogTypeDao from '../dao/blogTypeDao'
import messageDao from '../dao/messageDao'
import { BlogInput, BlogToPage } from '../middleware/validator/blog.validator'
import { handleTOC } from '../utils/tool'

// 添加博客
const addBlog = async (newBlogInfo: BlogInput) => {
  // 先将 toc 转成字符串
  newBlogInfo = handleTOC(newBlogInfo)

  // 接下来就是将处理好的  toc转成字符串格式
  newBlogInfo.toc = JSON.stringify(newBlogInfo.toc)

  // 初始化文章其他信息
  newBlogInfo.scanNumber = 0 // 阅读量初始化 为 0,
  newBlogInfo.commentNumber = 0 // 评论数初始化 为 0

  const data = await blogDao.addBlog(newBlogInfo)
  // 这一步操作就是 当我文章添加了 对应的文章分类也应该需要增加
  await blogTypeDao.addBlogToType(data.categoryId)
  return data
}

// 根据分页查询文章数据
const findBlogByPage = async (pageInfo: BlogToPage) => {
  // { page: '1', limit: '10', category: '1' }
  const parsedQuery: BlogToPage = {
    page: Number(pageInfo.page ?? 1),
    limit: Number(pageInfo.limit ?? 10),
    keyword: pageInfo.keyword ?? '',
    categoryId: pageInfo.categoryId ? Number(pageInfo.categoryId) : undefined, // 保持可选性
  }
  const data = await blogDao.findBlogByPage(parsedQuery)

  // 这里有一个坑 就是转换的时候 会转换不出成对象 这里需要双重转换才可以
  const parsedRows = data.rows.map((item) => {
    const plainItem = JSON.parse(JSON.stringify(item)) // 转换为普通对象
    return {
      ...plainItem,
      toc: JSON.parse(JSON.parse(plainItem.toc || '""')), // 先解析外层，再解析内层
    }
  })

  return { ...data, rows: parsedRows }
}

// 根据id 获取博客文章
const findOneBlog = async (data: Array<unknown>) => {
  const id = data[0] as number
  const auth = data[1] as string

  const result = await blogDao.findBlogById(id)
  if (result) {
    // 首先需要将 toc 转成一个正常的数组
    JSON.parse(JSON.stringify(result))
    result.toc = JSON.parse(JSON.parse(result.toc) || '""')
    // 根据前端判断是否 需要 将浏览数 增加
    if (!auth) {
      await blogDao.addScanNum(result.id)
    }
    return result
  } else {
    throw new Error('查询文章不存在')
  }
}

// 修改单个 博客文章
const updateBlog = async (blog: Array<unknown>) => {
  const blogId = blog[0] as number
  let data = blog[1] as BlogInput
  // 修改首先需要 判断 文章的内容正文是否有改变 有改变就需要重新 处理 Toc目录
  if (data.htmlContent) {
    // 进入 这里 表示输入的正文 是有改变的
    // 先将 toc 转成字符串
    data = handleTOC(data)

    // 接下来就是将处理好的  toc转成字符串格式
    data.toc = JSON.stringify(data.toc)
  }

  const result = await blogDao.updateBlog(blogId, data)
  return result
}

// 删除博客文章
const delBlog = async (blogId: number) => {
  // 第一步 根据 id 查询 对应的文章 信息
  const data = await blogDao.findBlogById(blogId)
  if (!data) throw new Error('该文章 id 信息不存在 ')
  // 第二步 需要对 对应的文章分类的文章数量 进行自减
  await blogTypeDao.delArticleCount(data.categoryId)
  // 第三步 就是该文章下的 所有评论一并进行删除
  await messageDao.delMessageByBlogId(blogId)
  // 第四步 删除博客文章返回数据
  const result = await blogDao.delBlog(blogId)

  return result
}

export default {
  addBlog,
  findBlogByPage,
  findOneBlog,
  updateBlog,
  delBlog,
}
