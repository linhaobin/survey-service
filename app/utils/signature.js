const sha1 = require('sha1')

// 生成随机数字符串
const createNonceStr = () => Math.random().toString(36).substr(2, 15)

// 生成时间戳字符串
const createTimestamp = () => new Date().getTime() + ''

// 进行字典排序
const dictSort = (args) => Object.keys(args).map((key) => args[key]).sort().join('')

const generateSignature = (...args) => {
  const string = args.sort().join('')
  return sha1(string)
}

module.exports = {
  generateSignature,
  createNonceStr,
  createTimestamp,
  dictSort,
}
