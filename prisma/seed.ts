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

  await prisma.banner.createMany({
    data: [
      {
        midImg: '/static/images/banner01.jpg',
        bigImg: '/static/images/banner01.jpg',
        title: '赛车是梦想 ~',
        description: '2025年度最佳摄影 ~',
      },
      {
        midImg: '/static/images/banner02.jpg',
        bigImg: '/static/images/banner02.jpg',
        title: '眼镜太大 ~',
        description: '魅力四射 ~',
      },
      {
        midImg: '/static/images/banner03.jpg',
        bigImg: '/static/images/banner03.jpg',
        title: '二次元甜美 ~',
        description: '最佳二次元女神 ~',
      },
    ],
  })
}

run()
