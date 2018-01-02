module.exports = appInfo => {
  const config = exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1514715329654_8932'

  // add your config here
  config.middleware = []

  // 微信
  config.weixin = {
    token: '', // 服务器验证令牌
    encodingAESKey: '', // 消息加密密钥
  }

  return config
}
