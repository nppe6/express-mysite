import { Request, Response } from 'express'
import { AdminInput } from '../middleware/validator/admin.validator'
import commonRes from '../utils/commonRes'
import silentHandle from '../utils/silentHandle'
import adminService from '../service/adminService'

const login = async (req: Request<{}, {}, AdminInput>, res: Response) => {
  const [e, user] = await silentHandle(adminService.login, req.body)

  return e ? commonRes.error(res, null, e.message) : commonRes(res, user)
}

export default {
  login,
}
