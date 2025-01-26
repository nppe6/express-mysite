import { Response } from 'express'
import { Code, CodeMessage, codeType } from '../constants/code'
import logger from './logger'

interface ResOptions {
  type?: codeType
  status?: number
  message?: unknown
}

function commonRes(res: Response, data: unknown, options?: ResOptions) {
  options = Object.assign({ type: Code[3000] }, options || {}) // 默认是 success

  const { type, status, message } = options
  let resStatus = status

  // 返回状态码
  if (resStatus === undefined) {
    resStatus = type === Code[3000] ? 200 : 409
  }

  // 响应参数
  const sendRes: { code: number; data: unknown; message?: unknown } = {
    code: Code[type as codeType],
    data,
  }

  message && (sendRes.message = message)
  res.status(resStatus).send(sendRes)
}

commonRes.denied = function (res: Response, data: unknown) {
  this(res, data, {
    type: 'denied',
    message: CodeMessage['denied'],
    status: 401,
  })
}

commonRes.error = function (res: Response, data: unknown, message?: unknown, status?: number) {
  logger.error(message || CodeMessage['error'])
  this(res, data, {
    type: 'error',
    message: message || CodeMessage['error'],
    status: status || 409,
  })
}

export default commonRes
