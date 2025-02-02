import { body } from 'express-validator'
import validate from './error.back'

export interface settingInput {
  avatar: string
  siteTitle: string
  github: string
  qq: string
  qqQrCode: string
  weixin: string
  weixinQrCode: string
  mail: string
  icp: string
  githubName: string
  favicon: string
}

const setting = validate([])

export default {
  setting,
}
