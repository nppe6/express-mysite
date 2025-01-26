import { RouterConf } from '..'
import adminRouter from '../admin'
import bannerRouter from '../banner'
import captchaRouter from '../captcha'

export const routerConf = [
  { path: '/admin', router: adminRouter },
  { path: '/res', router: captchaRouter },
  { path: '/banner', router: bannerRouter },
] as RouterConf[]
