const FIBOS = require("fibos.js");
const {
  eos,
  fibos
} = require('./config')

const fibos_client = FIBOS({
  chainId: fibos.chainId,
  keyProvider: eos.priKey,
  httpEndpoint: fibos.httpEndpoint.RPC,
  verbose: false,
  logger: {
    log: null,
    error: null
  }
})
// 查询账户
let rs = fibos_client.getTableRowsSync(true, "eosio.token", fibos.account, "accounts");
console.log(rs);