import { AdminInput } from '../middleware/validator/admin.validator'
import prisma from '../model/prisma'

const loginDao = async (loginInfo: AdminInput) => {
  return await prisma.admin.findUnique({
    where: {
      loginID: loginInfo.loginId,
    },
    select: {
      id: true,
      name: true,
      loginID: true,
      loginPwd: true,
    },
  })
}

export default {
  loginDao,
}
