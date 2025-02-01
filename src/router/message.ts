import { Router } from 'express'
import messageValidator from '../middleware/validator/message.validator'
import messageController from '../controller/messageController'
const messageRouter = Router()

messageRouter
  .post('/', messageValidator.message, messageController.addMessage)
  .get('/', messageController.findMessageByPage)
  .delete('/')

export default messageRouter
