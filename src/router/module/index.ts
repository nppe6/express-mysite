import { RouterConf } from '..'
import adminRouter from '../admin'
import captchaRouter from '../captcha'

export const routerConf = [
  { path: '/admin', router: adminRouter },
  { path: '/res', router: captchaRouter },
] as RouterConf[]
