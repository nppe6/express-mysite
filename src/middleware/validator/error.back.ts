import { NextFunction, Request, Response } from 'express'
import { ValidationChain, validationResult } from 'express-validator'
import commonRes from '../../utils/commonRes'

export default (validator: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validator.map((validate) => validate.run(req)))
    const error = validationResult(req)
    if (!error.isEmpty()) {
      return commonRes.error(res, null, error.array(), 401)
    }

    next()
  }
}
