import { Router, Express, Request, Response } from 'express'
import config from 'config'
import { routerConf } from './module'

export interface RouterConf {
  path: string
  router: Router
  meta: Record<string, any>
}

const API_PREFIX = config.get<string>('api_url')

function routes(app: Express) {
  app.get('/', (req: Request, res: Response) => {
    res.status(200).send('hello MR.Xiao')
  })

  routerConf.forEach((route) => {
    app.use(`${API_PREFIX}${route.path}`, route.router)
  })
}

export default routes
