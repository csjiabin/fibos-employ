var FIBOS = require("fibos.js");
const {
  eos,
  fibos
} = require('./config')
var eos_client = FIBOS({
    chainId: fibos.chainId,
    keyProvider: fibos.priKey,
    httpEndpoint: "http://ca-rpc.fibos.io:8870",
    verbose: false,
    logger: {
        log: null,
        error: null
    }
})
// 转入EOS
let eosaccount = fibos.account // 你的 FIBOS 账户名
let value = "1.0000" + " EOS"; //转账 EOS 数量
let ctx = eos_client.contractSync("eosio.token");
let memo = eos.account; //填入你的eos 账号
let result = ctx.transferSync(eosaccount, "fiboscouncil", value, memo);
console.log(result);