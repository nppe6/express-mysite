import { hash, verify } from 'argon2'
import { AdminInput, updateAdminInput } from '../middleware/validator/admin.validator'
import adminDao from '../dao/adminDao'
import { generateToken, UserInfoInterface } from '../middleware/jwt'

// 登录
const login = async (loginInfo: AdminInput) => {
  const password = loginInfo.loginPwd
  loginInfo.loginPwd = await hash(loginInfo.loginPwd)

  let adminUser = await adminDao.loginDao(loginInfo)
  if (!adminUser) throw new Error('用户不存在') // 抛出错误
  const loginPassword = await verify(adminUser.loginPwd, password)
  if (!loginPassword) throw new Error('密码输入错误')

  // 这一步是 进行token 过期事件的传递设置的 操作
  let loginPeriod: number | null = null
  if (loginInfo.remember) {
    loginPeriod = Number(loginInfo.remember)
  } else {
    loginPeriod = 1
  }

  // 生成 token
  const token = generateToken(adminUser, loginPeriod)
  // 提取 将 密码 进行去除出去 生成一个新的对象 进行返回
  const { loginPwd, ...data } = adminUser

  return { ...data, token }
}

// 修改信息
const updateAdmin = async (accountInfo: updateAdminInput) => {
  const password = accountInfo.oldLoginPwd
  accountInfo.oldLoginPwd = await hash(accountInfo.oldLoginPwd)
  const data = await adminDao.adminDao(accountInfo)

  if (!data) throw new Error('用户信息不存在') // 抛出错误
  const loginPassword = await verify(data.loginPwd, password)
  if (!loginPassword) throw new Error('旧密码输入错误')

  // 密码正确 开始修改
  // 组装新的对象信息
  const newPassword = await hash(accountInfo.loginPwd)
  const result = await adminDao.updateDao(
    {
      name: accountInfo.name,
      loginId: accountInfo.loginId,
      loginPwd: newPassword,
      oldLoginPwd: accountInfo.oldLoginPwd,
    },
    data.id,
  )
  return result
}

export default {
  login,
  updateAdmin,
}
