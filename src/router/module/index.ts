import { RouterConf } from '..'
import adminRouter from '../admin'
import bannerRouter from '../banner'
import blogtypeRouter from '../blogtype'
import captchaRouter from '../captcha'
import uploadRouter from '../upload'

export const routerConf = [
  { path: '/admin', router: adminRouter },
  { path: '/res', router: captchaRouter },
  { path: '/banner', router: bannerRouter },
  { path: '/uploads', router: uploadRouter },
  { path: '/blogtype', router: blogtypeRouter },
] as RouterConf[]
