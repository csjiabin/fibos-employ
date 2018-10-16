var FIBOS = require('fibos.js')
var http = require('http');
var httpClient = new http.Client();
var httpServerHost = "http://tunnel.fibos.io/1.0/app/token/create";

function randomWord(randomFlag, min, max) {
  var str = "",
    range = min,
    arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  // 随机产生
  if (randomFlag) {
    range = Math.round(Math.random() * (max - min)) + min;
  }
  for (var i = 0; i < range; i++) {
    pos = Math.round(Math.random() * (arr.length - 1));
    str += arr[pos];
  }
  return str;
}
let count = 0

function rg() {
  var account = randomWord(false, 12) // 你的 FIBOS 账户名
  var prikey = FIBOS.modules.ecc.randomKeySync(); //私钥
  var pubkey = FIBOS.modules.ecc.privateToPublic(prikey); //公钥
  var rep = httpClient.post(httpServerHost, {
    json: {
      account,
      pubkey
    }
  }).json()
  count++
  console.log({
    request: {
      account,
      prikey,
      pubkey
    },
    respone: rep,
    count
  });
  // 失败重试 成功后停止
  if (rep.message !== 'success') {
    timer = 5000
    if (rep.message == 'The interval is less than one hour') timer = 60 * 60 * 1000
    console.log(timer)
    setTimeout(() => {
      rg()
    }, timer);
  }
}
rg()