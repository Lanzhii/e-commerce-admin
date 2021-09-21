const Mock = require('mockjs')
// 登录接口
Mock.mock('localhost:8080/login', 'post', (req) => {
  const { password, username } = JSON.parse(req.body)
  if (username === 'user' && password === '123456') {
    return {
      status: 200,
      success: true,
      message: '登录成功',
      token: '3arc9h0vhcr0f8iprpnscmfo8s',
      nickname: '杨兰芝'
    }
  } else {
    return {
      status: 100,
      success: false,
      message: '账号或者密码有误'

    }
  }
})
