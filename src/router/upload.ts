import express from 'express'
import uploadController from '../controller/uploadController'
import { verifyToken } from '../middleware/jwt'
import multer from 'multer'
import path from 'path'
const upload = multer({ dest: path.resolve(__dirname, '../public/uploads') })

const uploadRouter = express.Router()

uploadRouter.post('/', verifyToken(), upload.array('file', 1), uploadController.upload)

export default uploadRouter
