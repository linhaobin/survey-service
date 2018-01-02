const assert = require('assert')
const mock = require('egg-mock')

const signatureUtil = require('../../app/utils/signature')

describe('test/utils/signature', () => {
  let app
  before(() => {
    // 创建当前应用的 app 实例
    app = mock.app()
    // 等待 app 启动成功，才能执行测试用例
    return app.ready()
  })

  it('test', () => {
    const signature = signatureUtil.generateSignature(app.config.weixin.token, 'uxr7kscmbhj', '1514858051955')

    assert(signature === '670fa5bf49765d8216c6880c6fdc219ac8c71470')
  })
})
