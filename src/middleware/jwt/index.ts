import jwt from 'jsonwebtoken'
import config from 'config'
import md5 from 'md5'

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
