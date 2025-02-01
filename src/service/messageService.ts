import path from 'path'
import { messageInput } from '../middleware/validator/message.validator'
import { readDirLength } from '../utils/tool'
import messageDao from '../dao/messageDao'
import blogDao from '../dao/blogDao'
const dir = path.join(__dirname, '../public/avatar')

// 添加留言或评论
const addMessage = async (newMessage: messageInput) => {
  // 博客id
  newMessage.blogId = newMessage.blogId ? newMessage.blogId : null
  // 时间戳
  newMessage.createDate = Date.now() + ''
  // 头像随机生成  读取 static/avatar 的头像
  const files = await readDirLength(dir)
  // 随机一个文件
  const randomIndex = Math.floor(Math.random() * files.length)
  newMessage.avatar = '/static/avatar/' + files[randomIndex]
  // 数据库新增
  const result = await messageDao.addMessage(newMessage)
  // 如果是评论 对应的文章 评论数 也是需要增加的
  if (newMessage.blogId) {
    await blogDao.addCommentNum(newMessage.blogId)
  }

  return result
}

export default {
  addMessage,
}
