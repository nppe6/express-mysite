import { hash, verify } from 'argon2'
import { AdminInput } from '../middleware/validator/admin.validator'
import adminDao from '../dao/adminDao'

const login = async (loginInfo: AdminInput) => {
  const password = loginInfo.loginPwd
  loginInfo.loginPwd = await hash(loginInfo.loginPwd)

  let adminUser = await adminDao.loginDao(loginInfo)
  if (!adminUser) throw new Error('用户不存在') // 抛出错误
  const loginPwd = await verify(adminUser.loginPwd, password)
  if (!loginPwd) throw new Error('密码输入错误')

  return adminUser
}

export default {
  login,
}
