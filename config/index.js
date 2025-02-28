require('dotenv').config()

const config = {

  testnet: '0',
  //testnet: process.env.TESTNET,

  web3: {
    provider: 'https://api.avax.network/ext/bc/C/rpc'
  },

redis: {
    host: `127.0.0.1`,
    port: `6379`,
    // password: PROCESS.ENV.REDIS_PASSWORD
  },

  tokenLists: [,
    'https://raw.githubusercontent.com/pangolindex/tokenlists/main/pangolin.tokenlist.json'
    //'https://unpkg.com/@crocoswap/default-token-list@3.2.1/build/sushiswap-default.tokenlist.json',
    //'https://raw.githubusercontent.com/BoggedFinance/Bogged-Token-List/main/avax/tokenlist.json'
  ],

  mim: {
    "chainId": 43114,
    "address": "0x130966628846BFd36ff31a822705796e8cb8C18D",
    "decimals": 18,
    "name": "Magic Internet Money",
    "symbol": "MIM",
    "logoURI": "https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x130966628846BFd36ff31a822705796e8cb8C18D/logo.png"
  },
  wavax: {
    "chainId":43114,
    "name":"Wrapped AVAX",
    "symbol":"WAVAX",
    "address":"0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    "decimals":18,
    "logoURI":"https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7/logo.png"
  },

  usdc: {
    "chainId":43114,
    "name":"USD Coin",
    "symbol":"USDC",
    "address":"0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    "decimals":6,
    "logoURI": "https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E/logo.png"

  }

}


module.exports = config
