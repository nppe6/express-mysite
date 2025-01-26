import { Request, Response } from 'express'
import { AdminInput, updateAdminInput } from '../middleware/validator/admin.validator'
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

// 更新用户信息接口
const updateAdmin = async (req: Request<{}, {}, updateAdminInput>, res: Response) => {
  const [e, user] = await silentHandle(adminService.updateAdmin, req.body)

  return e ? commonRes.error(res, null, e.message) : commonRes(res, user, { message: '修改信息成功' })
}

export default {
  login,
  whoami,
  updateAdmin,
}
