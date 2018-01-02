const Controller = require('egg').Controller
const signatureUtil = require('../../utils/signature')

class SignatureController extends Controller {
  /**
   * Token验证
   */
  async check() {
    const {app, logger, query: {signature, echostr, timestamp, nonce}} = this.ctx

    logger.info('ctx: %j', this.ctx)
    logger.info('query: %j', this.ctx.query)

    const genSigature = signatureUtil.generateSignature(timestamp, nonce, app.config.weixin.token)

    if (signature === genSigature) {
      this.ctx.body = echostr
    }
  }
}

module.exports = SignatureController
