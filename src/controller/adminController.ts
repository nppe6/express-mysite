import { Request, Response } from 'express'
import { AdminInput } from '../middleware/validator/admin.validator'
import commonRes from '../utils/commonRes'
import silentHandle from '../utils/silentHandle'
import adminService from '../service/adminService'
import { CustomRequest, UserInfoInterface } from '../middleware/jwt'

// 登录controller
const login = async (req: Request<{}, {}, AdminInput>, res: Response) => {
  const [e, user] = await silentHandle(adminService.login, req.body)

  return e ? commonRes.error(res, null, e.message) : commonRes(res, user, { message: '登录成功' })
}

// 恢复登录 controller
const whoami = async (req: CustomRequest<UserInfoInterface>, res: Response) => {
  const { exp, iat, loginPwd, ...data } = req.userInfo as UserInfoInterface
  return commonRes(res, data)
}

export default {
  login,
  whoami,
}
