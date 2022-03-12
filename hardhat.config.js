require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/gM86ZjA5-Yx0ode1h15Pz_LXweWJWdWx',
      accounts: [
        '58dba2fa4c15763c88eba1df5418e67abedb4d2367d62262ee8925f613294edd',
      ],
    },
  },
}
