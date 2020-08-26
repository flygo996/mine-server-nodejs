module.exports = {
  
  // 活动发奖的私钥 
  event_pk: '',
  // 活动发奖的私钥 对应的公钥
  event_pk_hex: '',

  operatorDice_pk: '',
  // 操作Live游戏相关的私钥
  operatorLive_pk: '',
  // 财务账号
  financeBase58Check: '',
  // 合约地址
  contract: {
    Referralship: '41af16843d1b471364576015e4062cdc3f2628eb62',//TRvzE7AjfD9e73uVKfkGWEsNZemz5tz5Vw
    WinToken: '4174472e7d35395a6b5add427eecb7f4b62ad2b071',//TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7
    TronBetDice: '41e42d76d15b7ecd27a92cc9551738c2635c63b71c',//TWmhXhXjgXTj87trBufmWFuXtQP8sCWZZV
    TronBetMoon: '41bdd85750b6774910ca5d12b0620ba318eb00154b',//TTH1sxRXqdLtbNXTCjQGdRp9nKV6DhdzJk
    TronBetRing: '41106841eb00cad39b90bf410fc52af8f73f2bbe2b',//TBTxi4miSX4SJL8rM38eTaRb8AA16py27x
    TronBetRingPvp: '4125fcfd3729801561b37f73189c98ab50341310c5',//TDS559bznfyikQQ1xEw2yfbrLbwoNig1Bc
    TronBetDiceStaker: '41aef3746e20c2a49b70c2c32b4f343548f428e7f1',//TRvGDySXaL3sdpSxo41LLskjJ76N3Mz8v9
    TronBetStakerPlus: '414f92846c191c774d761f3949f9794288b3b9a995',//THDwuQsEiNqh8oLFhi7pjcyWCoYv4hSohL
    TronBetDiceOraclize: '4163f9f14d5319b7f8822e7771aea45b49e85bb35e',//TK5qKN9xJoLfCzZPG6Mj642WQtvbiHCTMx
    TronBetMoonLogic: '415ee4096bad59e4656447af5420e09ef35f1e94ec',//TJcwhNAGdZev49UzsYdVDE4mMhB1dWb283
    TronBetMoonOraclize: '417df10519e630f46071ff0569494d03b83d8289ca',//TMT8CPuyV9saDEr1zwM7zzq8cL7s2y8wZi
    TronBetRingLogic: '413bc99b02c0b3d02475faa97a04e44543603ad2c6',//TFRLPB1kiCyKRSM9e7vFn8KqN66qeTGVUv
    TronBetRingOraclize: '41f1dd6a50563513b024a8c1a8257cadd66f42d16e',//TY256VcJCXDAKDuGDXFFvqyuD4LSWbBJ86
    TronBetRingPvpLogic: '41a67fd02df7895a8bc70a0401db26ba0f2c3e28de',//TR9aHX6m2JEG8VYjVLXocnn8QewbYYPtUm
    TronBetRingPvpOraclize: '4150882bdd432f6d47a634a2c44b37f23ddb4115cf',//THK2BkpcL7YQo4y8i9fH5X6BmAvsVxDPdz
    TronBetDiceDivider: '41b461e58a69c8fb8dec6e23888d5fcd743ab56938',//TSQyuZowokRp3TMRCcrbsDnhnnDSg7gtMT
    TronBetDividerPlus: '41479dfc899e9e8cfcc7adcf26dbdab49623f3b0a5',//TGVtEmiB9EH4Rt1sEvvsaaBCQHvBVEkvYN
    DiceToken: '416ce0632a762689a207b9cce915e93aa9596816ca',//TKttnV3FSY1iEoAwB4N52WK2DxdV94KpSd
    TronBetDiceDev: '410fa13f1920c66d7c9cb476e00557971a7f6bbd54',//TBPrJYARpfAe9kmnHvMAWcqimndALjbxed
    TronBetPool: '411d0f4031f9e3eeeb727b10e462ab0e59ee06a2a6',//TCcrsGF9PdLxJF869dQsK4V5QEG43uvZdt
    TronBetPoolPlus: '41a2d1d011696b59796b8eabe3a1b85cd4edbc83aa',//TQp7pBWhEYiTUs6B1YBpWrmnjf5QjT1gXH
    TronBetDice10: '411fee56b32884a49155b7b6137ec0f1ee657455d5',//TCt3U4qRxJy4nCWFUQit1oCud2N3Epu7g5
    TronBetDiceOraclize10: '4110d718c22e8aa287bb8193aceaf3b90e66e90e0a',//TBWFVJvnveYW7VTkM9sucxogsh1vgbewh5
    TronBetPool10: '41049909a380d589b9af76846280d3fcbeb67826f0',//TAPX34wUQa6TBgSzj2dBJbjhKpUhejwnaP
    LiveToken: '41d829659f0f7661f29f12f07a5be33c13b6c9dd59',//TVgAYofpQku5G4zenXnvxhbZxpzzrk8WVK
    TronBetLive: '414f012a6d5ecc301ec577714bb1431ed7e6f3ba0c',//THAwnD8pTTZMdUmmVjGXCYW8DdY74xkNpm
    TronBetLiveStaker: '4182401794f58a8786995ba71bbcbefdd4041e07a1',//TMqudCHDJRLoeKfnE7x27SZsPKj4ARpqud
    TronBetLiveDev: '41342b0b5afcd63040fd573870b3958404573e4f07',//TEj3horCWjL231UYaJVi2bweqbiz2GUMfB
    TronBetLiveDivider: '413a71094391e538e432b485edb2f7894b44bf1202',//TFJDc5RmS5HuLRujYSFwHadHQbnz1GXJ48
    TronBetLivePool: '41ba01bef5a503d3404e62b426b7e4e4595fe14530',//TSvin3om2vWuw5stbxTeDQrpqH2VSKTpKz
    TronBetLiveHotSlots: '41d139a029d0de5172949fb01c565cb6eeeffbd4e9',//TV3VG3v6V3XMov3J2hsAwHSpdsScXXesMA
    RakeToken: '4134f81abd2d45c1ccb83d20437f2c1e54ac1ffea8',//TEoHMdhQgarbsXXuzQe3TJa67nVtgufb8W
    TronBetRakeStaker: '4192d87ad1d98374755434cb560b5e01b05c48addf',//TPMezLuNvhfeJTdV8TzPHdX6ueZqdrLe6H
    TronBetTexas: '41e73da647a0363660855f2b368a0eec7283992de9',//TX3twrcq2aGF3WGwT1Kzf2sNBkz97K4G1N
    TronBetRakeDev: '418d8daaab7ded8ed6a3a2d6bf69d666180c365464',//TNsfzHDwdQTh9vChfTxd3hnjbSAmBPgWBW
    TronBetRakeDivider: '41ee8cfa0d020313c26073a9b3c1ac5a3c22319d5f',//TXiYhx9paXyDzPqgT6nCkzxKYtn2gHVNDp
    TronBetRakePool: '41c12f898af787ba7ca011bc4ac10b5475bc0102a4',//TTagN2hiUpt7HBbLTgLWi8qQoSmfrXn9Zp
    TronBetTexasJackpot: '415ae207ff9d5d95b9e0b4fe50f480508046a43595',//TJFkbFSw2ygZn1bjQtsirXK4X9u59i27VQ
    TronBetPool20: '41a319aae271b031fba91cf489b709616e837a1a56',//TQqbtjk4x4YuuPEoizdaNfVqDpkVzGAXgi
    TronBetDice20: '41f44697c352fc12b15718147f625b97720b21c41e',//TYEpSjw62cDWNgCowYSsnyBQvi75i11P3c
    TronBetDiceOraclize20: '418ae25f03b57abc538e0c92f7923a95b0252bde81',//TNdZS5J6LhpK9NRjkWzNr9jGswj6kAbiNj

    WinTokenBase58Check: 'TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7',//
    TronBetPoolPlusBase58Check: 'TQp7pBWhEYiTUs6B1YBpWrmnjf5QjT1gXH',//
    BttTokenId: 1002000,

    LivePay: '41f13f42b1ebe9c32f273f78a09979e123fba50f22',//TXxodi45ezBCHGDQhFwBQeyTeq5sA6jRcz
    LiveStakingDividend: '4111f60acef886b62f45f0d9d784c8e062b73491ec',//TBcBEdghMBi4NtCNQ8ZvdSXgm7xvzMwbqz
    LiveBoardDividend: '410039b94367071a1a5f3a95ab1d8c153b23933ade',//T9zQ9mfekmZZWs8RrtVNHHQtaCDBWEeME6
    WinDividend: '41afa824f5eee50be558a8ddd7a555d34aaceccc72',//TRyzgWGjzvXx88ExpHS8L9DXxwTtNEaN68
    WinPool: '41affbcb5d8daac7bcaf316d4c9f76a21648fd8e2b',//TS1itcNbBdiHViiPgiWVCUDHLpZjhaVWpr

    USDT: '41a614f803b6fd780986a42c78ec9c7f77e6ded13c',//TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t
    USDTPooLOwner: '',

    Useless: '410000000000000000000000000000000000000000'
  },
  // mysql 配置
  mysql: {
    read_db_host: 'localhost',
    host: 'localhost',
    port: '3306',
    user: 'root',
    pwd: '123456'
  },
  // mongodb 配置
  mongo: {
    host: 'localhost',
    port: 27017,
    user: 'tbpoker',
    pwd: 'tronbetpoker2019'
  },
  // 端口配置
  port: {
    tronbet_backend: 18050,
    tronbet_dice: 18051,
    tronbet_moon: 18052,
    tronbet_ring: 18053,
    tronbet_profile: 18055,

    tronbet_mine:17001,//后续希望所有的端口分开，dapp 和live 分开，虽然live 以后可能只有一个但是dapp可能有多个

    tronbet_backend02: 18056,
    tronbet_event01: 18058,

    tronlive_emserver: 18060,
    tronbet_live: 18066,

    tronsport_teckserver: 18068,
    tronswagger_hub: 18069,

    tronbet_poker: 18070,
    tronpoker_jackpot: 18071,
    tronlive_platinus: 18072,

  },
  // 远程接口
  // back01
  userInfoUrl: 'https://backendapi.tronbet.io/beter/userOverViewInfo?addr=',
  // back02
  liveProfitUrl: 'https://webliveapi.tronbet.io/user/profit',
  pokerProfitUrl: 'https://jackpotapi.tronbet.io/jackpot/profit',

  // tron
  master_full: 'http://192.169.81.106:8090',
  master_solidity: 'http://192.169.81.106:8091',
  master_event: 'https://api.trongrid.io',
  slave_full: 'https://testhttpapi.tronex.io',
  slave_solidity: 'https://testhttpapi.tronex.io',
  slave_event: 'http://47.252.82.6:8090/',

  // 官方地址
  tron_url_full: 'https://api.trongrid.io',
  tron_url_solidity: 'https://api.trongrid.io',
  tron_url_event: 'https://api.trongrid.io/',

  back_tron_url_full: 'https://super.guildchat.io',
  back_tron_url_solidity: 'https://solidity.guildchat.io',
  back_tron_url_event: 'https://api.trongrid.io/',

  // 第三方
  coinmarketcap: {
    coinExchangeUrl: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
    headers: { 'X-CMC_PRO_API_KEY': '8511db0f-1e4e-43fa-91b6-1ef841bf1269' }
  },
  EveryMatrix: {
    LoginName: '',
    Password: ''
  },
  Platinus: {
    secretKey: '',
  },
  coinspaid: {
    host: 'https://app.coinspaid.com/api',
    key: '',
    secret: ''
  },
  bettech: {
    publicKey: `-----BEGIN PUBLIC KEY-----
-----END PUBLIC KEY-----`
  },
  mail: {
    port: 465,
    host: 'smtp.gmail.com',
    user: '',
    pass: ''
  },
  swaghub: {
    host: '',
    operator_id: 823,
    swagPublick: `-----BEGIN PUBLIC KEY-----
-----END PUBLIC KEY-----`,
    publicKey: `-----BEGIN PUBLIC KEY-----
-----END PUBLIC KEY-----`,
    privetKey: `-----BEGIN RSA PRIVATE KEY-----
-----END RSA PRIVATE KEY-----`
  }
};
