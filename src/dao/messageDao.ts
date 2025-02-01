import { messageInput } from '../middleware/validator/message.validator'
import prisma from '../model/prisma'

const addMessage = async (newMessage: messageInput) => {
  return await prisma.message.create({ data: newMessage })
}

export default {
  addMessage,
}
