import { AdminInput } from '../middleware/validator/admin.validator'
import prisma from '../model/prisma'

const loginDao = async (loginInfo: AdminInput) => {
  return await prisma.admin.findUnique({
    where: {
      loginID: loginInfo.loginId,
    },
  })
}

export default {
  loginDao,
}
