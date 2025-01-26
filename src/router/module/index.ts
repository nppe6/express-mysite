import { RouterConf } from '..'
import adminRouter from '../admin'

export const routerConf = [{ path: '/admin', router: adminRouter }] as RouterConf[]
