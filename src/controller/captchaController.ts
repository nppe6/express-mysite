import express from 'express'
import captchaService from '../service/captchaService'
import commonRes from '../utils/commonRes'

const getCaptcha = async (req: express.Request, res: express.Response) => {
  // 生成验证码
  const captcha = await captchaService.getCaptcha()
  req.session.captcha = captcha.text

  // 设置响应头
  res.setHeader('Content-Type', 'image/svg+xml')
  res.send(captcha.data)
}

export default {
  getCaptcha,
}
