const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const config = require('./util');


const provider = new HDWalletProvider(
        (process.env.mnemonic || config.mnemonic),
        (process.env.endpoint || config.endpoint)
);
const web3 = new Web3(provider);
const instance = new web3.eth.Contract(
        config.contractAbi,
        process.env.contractAddress || config.contractAddress
);
instance.setProvider(provider);

module.exports = {
        instance,
        web3
};