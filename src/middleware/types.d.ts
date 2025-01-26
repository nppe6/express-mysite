import 'express-session'

declare module 'express-session' {
  interface SessionData {
    captcha?: string // 定义自定义属性
  }
}
