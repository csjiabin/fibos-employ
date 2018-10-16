const FIBOS = require("fibos.js");
const {
  eos,
  fibos
} = require('./config')
const eos_client = FIBOS({
  chainId: eos.chainId,
  keyProvider: eos.priKey,
  httpEndpoint: eos.httpEndpoint,
  verbose: false,
  logger: {
    log: null,
    error: null
  }
})
// 转入
let eosaccount = eos.account // 你的 EOS 账户名
let value = "1000.0000" + " EOS"; //兑换 EOS 数量
let ctx = eos_client.contractSync("eosio.token");
let memo = fibos.account; //填入你的fibso 账号
let result = ctx.transferSync(eosaccount, "fiboscouncil", value, memo);
console.log(result);