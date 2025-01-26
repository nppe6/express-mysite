import svgCaptcha from 'svg-captcha'
const getCaptcha = async () => {
  const captcha = svgCaptcha.create({
    size: 4, // 生成的 字符个数
    ignoreChars: 'iIl10Oo', // 过滤掉的字符
    noise: 6, // 干扰线
    color: true, // 颜色是否打开
  })

  return captcha
}

export default {
  getCaptcha,
}
