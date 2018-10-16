const FIBOS = require("fibos.js");
const {
  eos,
  fibos
} = require('./config')
const fibos_client = FIBOS({
  chainId: fibos.chainId,
  keyProvider: fibos.priKey,
  httpEndpoint: fibos.httpEndpoint.RPC,
  verbose: false,
  logger: {
    log: null,
    error: null
  }
})
// 转FO
let ctx = fibos_client.contractSync("eosio.token");
let result = ctx.exchangeSync(fibos.account, `1000.0000 EOS@eosio`, `0.0000 FO@eosio`, `exchange EOS to FO`, {
  authorization: fibos.account
});
console.log(result);