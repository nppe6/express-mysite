import { RouterConf } from '..'
import adminRouter from '../admin'
import bannerRouter from '../banner'
import blogRouter from '../blog'
import blogtypeRouter from '../blogtype'
import captchaRouter from '../captcha'
import messageRouter from '../message'
import projectRouter from '../project'
import uploadRouter from '../upload'

export const routerConf = [
  { path: '/admin', router: adminRouter },
  { path: '/res', router: captchaRouter },
  { path: '/banner', router: bannerRouter },
  { path: '/uploads', router: uploadRouter },
  { path: '/blogtype', router: blogtypeRouter },
  { path: '/blog', router: blogRouter },
  { path: '/project', router: projectRouter },
  { path: '/message', router: messageRouter },
  { path: '/comment', router: messageRouter },
] as RouterConf[]
