import { PrismaClient } from '@prisma/client'
import { hash } from 'argon2'
import _ from 'lodash'
import { Random } from 'mockjs'

const prisma = new PrismaClient()

async function run() {
  await prisma.admin.create({
    data: {
      name: '超级管理员',
      loginID: 'admin',
      loginPwd: await hash('xiao666'),
    },
  })
}

run()
