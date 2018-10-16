var FIBOS = require("fibos.js");
const {
  eos,
  fibos
} = require('./config')
var config = {
    chainId: "6aa7bd33b6b45192465afa3553dedb531acaaff8928cf64b70bd4c5e49b7ec6a",
    priKey: fibos.priKey,
    httpEndpoint: "http://ca-rpc.fibos.io:8870",
    verbose: false,
}
var fibos_client = FIBOS({
    chainId: config.chainId,
    keyProvider: config.priKey,
    httpEndpoint: config.httpEndpoint,
    verbose: false,
    logger: {
        log: null,
        error: null
    }
})
// FO转EOS
let ctx = fibos_client.contractSync("eosio.token");
var result = ctx.exchangeSync(fibos.account, `1.0000 FO@eosio`, `0.0000 EOS@eosio`, `exchange FO to EOS`, {
    authorization: fibos.account
});
console.log(result);