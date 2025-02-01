import blogDao from '../dao/blogDao'
import blogTypeDao from '../dao/blogTypeDao'
import { BlogInput, BlogToPage } from '../middleware/validator/blog.validator'

// 添加博客
const addBlog = async (newBlogInfo: BlogInput) => {
  // 先将 toc 转成字符串 这部分代码 下节写
  newBlogInfo.toc = JSON.stringify('["a","b"]')
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
  const data = blog[1] as BlogInput
  // 修改首先需要 判断 文章的内容正文是否有改变 有改变就需要重新 处理 Toc目录
  if (data.htmlContent) {
    // 进入 这里 表示输入的正文 是有改变的
    data.toc = JSON.stringify('["a","b"]')
  }

  const result = await blogDao.updateBlog(blogId, data)
  return result
}

const delBlog = async (blogId: number) => {}

export default {
  addBlog,
  findBlogByPage,
  findOneBlog,
  updateBlog,
  delBlog,
}
