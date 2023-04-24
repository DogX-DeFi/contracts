require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require('hardhat-deploy');
module.exports = {
  namedAccounts: {
    deployer: {
      default: 0,
      703: "0xD6a33cc318c50C5b6825a26C8aa4bf353cE87356",
      7: "0x47af3ec40ba22e2fBb2AD9564982569C9b3f7503",
      35011: "0x47af3ec40ba22e2fBb2AD9564982569C9b3f7503",
      808: "0xD6a33cc318c50C5b6825a26C8aa4bf353cE87356",
    },
  },
  networks: {
    raica: {
      url: "https://rpc.raicachain.com",
      accounts: [`${process.env.PRIVATE_KEY}`],
      chainId: 808,
    },
    tch: {
      url: "https://rpc.thaichain.org",
      accounts: [`${process.env.PRIVATE_KEY}`],
      chainId: 7,
    },
    j2o: {
      url: "https://rpc.j2o.io",
      accounts: [`${process.env.PRIVATE_KEY}`],
      chainId: 35011,
    },
  },
  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY,
      polygon: process.env.POLYGONSCAN_API_KEY,
    },
  },
  solidity: {
    version: "0.6.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
