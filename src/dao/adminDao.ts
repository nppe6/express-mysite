import { UserInfoInterface } from '../middleware/jwt'
import { AdminInput, updateAdminInput } from '../middleware/validator/admin.validator'
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

const adminDao = async (accountInfo: updateAdminInput) => {
  return await prisma.admin.findUnique({
    where: {
      loginID: accountInfo.loginId,
    },
  })
}

const updateDao = async (newAccountInfo: updateAdminInput, id: number) => {
  return await prisma.admin.update({
    where: {
      id,
    },
    data: {
      name: newAccountInfo.name,
      loginID: newAccountInfo.loginId,
      loginPwd: newAccountInfo.loginPwd,
    },
    select: {
      id: true,
      name: true,
      loginID: true,
    },
  })
}

export default {
  loginDao,
  adminDao,
  updateDao,
}
