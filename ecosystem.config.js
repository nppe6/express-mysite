module.exports = {
  apps: [
    {
      name: 'express-mysite-server',
      script: './dist/app.js', // 确保这里指向编译后的 JS 文件
      instances: 1, // 限制为单实例
      exec_mode: 'fork', // 使用 fork 模式
      env: {
        NODE_ENV: 'production', // 设置生产环境变量
      },
    },
  ],
}
