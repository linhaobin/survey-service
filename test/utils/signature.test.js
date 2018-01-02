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
    const signature = signatureUtil.generateSignature(app.config.weixin.token, '1514869647', '1666281940')

    assert(signature === '95a0aaf886536b492f1f75ae29e6811ba64cde5e')
  })
})
