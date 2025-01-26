import jwt from 'jsonwebtoken'
import config from 'config'
import md5 from 'md5'
import { NextFunction, Request, Response } from 'express'
import commonRes from '../../utils/commonRes'

export interface CustomRequest<T> extends Request {
  userInfo?: T
}

export interface UserInfoInterface {
  id: number
  name: string
  loginID: string
  loginPwd: string
  iat: number
  exp: number
}

export const generateToken = (payload: any, loginInfo = 1) => {
  // Bearer 是约定熟成 的一个前缀
  // payload 是传入函数内容 一般为用户的一些信息  密钥  加密方式 以及 token时效性

  return (
    'Bearer ' +
    jwt.sign(payload, md5(config.get<string>('secret_key')), {
      algorithm: 'HS512',
      expiresIn: 60 * 60 * 24 * loginInfo,
    })
  )
}

export const verifyToken = (required = true) => {
  return (req: CustomRequest<any>, res: Response, next: NextFunction) => {
    // 拿到token 信息
    let token: any = req.headers.authorization
    token = token ? token.split(' ')[1] : null
    // 判断是否有token
    if (token) {
      // 对 token 信息进行校验  需要拿到的token以及密钥 以及加密的方式
      jwt.verify(token, md5(config.get<string>('secret_key')), { algorithms: ['HS512'] }, (err, info) => {
        if (err) {
          return commonRes.error(res, null, 'token失效或已过期！', 402)
        } else {
          console.log('校验通过')
          req.userInfo = info
          next()
        }
      })
    } else if (required) {
      return commonRes.error(res, null, 'token失效或已过期！', 402)
    } else {
      next()
    }
  }
}
