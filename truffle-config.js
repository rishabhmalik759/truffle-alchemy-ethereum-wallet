const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();
const { API_URL, MNEMONIC } = process.env;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, API_URL)
      },
      network_id: 3,
      gas: 4000000, //4M is the max
      from: '0x24ff72e1Ae17406af0128c7EB0cd2C93eaDc540B'
    }
  },
  compilers: {
      solc: {
      version: "^0.5.2"
      }
  }
};
