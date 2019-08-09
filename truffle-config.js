// File: `truffle-config.js`
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 22000, // was 8545
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000,
      type: "quorum" // needed for Truffle to support Quorum
    },
    nodefour:  {
      host: "127.0.0.1",
      port: 22003,
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000,
      type: "quorum" // needed for Truffle to support Quorum
    },
    nodeseven:  {
      host: "127.0.0.1",
      port: 22006,
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000,
      type: "quorum" // needed for Truffle to support Quorum
    }
  }
}; 