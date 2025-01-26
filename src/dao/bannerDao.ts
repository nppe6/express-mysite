import { updateBannerInput } from '../middleware/validator/banner.validator'
import prisma from '../model/prisma'

const findBanner = async () => {
  return await prisma.banner.findMany({
    where: {},
    select: {
      id: true,
      midImg: true,
      bigImg: true,
      title: true,
      description: true,
    },
  })
}

const updateBanner = async (bannerId: number, banner: updateBannerInput) => {
  return await prisma.banner.update({
    where: {
      id: bannerId,
    },
    data: { ...banner },
    select: {
      id: true,
      midImg: true,
      bigImg: true,
      title: true,
      description: true,
    },
  })
}

export default {
  findBanner,
  updateBanner,
}
