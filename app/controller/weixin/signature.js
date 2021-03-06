const Controller = require('egg').Controller
const signatureUtil = require('../../utils/signature')

class SignatureController extends Controller {
  /**
   * Token验证
   */
  async check() {
    const {app, query: {signature, echostr, timestamp, nonce}} = this.ctx

    const genSigature = signatureUtil.generateSignature(timestamp, nonce, app.config.weixin.token)

    if (signature === genSigature) {
      this.ctx.body = echostr
    }
  }
}

module.exports = SignatureController
