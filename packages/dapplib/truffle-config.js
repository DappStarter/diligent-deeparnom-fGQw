require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remain million grace loan frame tape'; 
let testAccounts = [
"0x4b4c9b4fbfd5e8f344d30e1e88761fab5a2324c3525decb696917597109a8e57",
"0x0a9a1d81f491ad231afc561aee7a86fd07cd5c278097c1ecc4cd1c679bc74176",
"0xb18de19d8b3ad501e07dbfc01cd8d9582841ff4b4d01481729dcde1c4ca45474",
"0x1637c7c8023c634b341467939e8aa8646e7487b0f225c5bbd6d7ebef9065debf",
"0xc6f721452e6ad36d6682720f5fc520a6eb63a2a5dd6e42272ad014416b71a7bf",
"0x31dedb09e56af4115d1b199d8df43896d998573f28ab9803145967b5b618aa34",
"0x7a4e8a67c2d169992faec74cab226e81b9c10cda5468d1bd0a8e06da0df97dee",
"0xb25589516e31b42c4b6ca08eefc3975d999c4277f72e58c42f1d5eda5aa0f3b9",
"0x86e656c55c1577b531f643f0d7a02b88cb7785d855fb4059f420191e7f5e19bd",
"0x9016cf47656a30284b4dbc4129afeeeb7045a8429beecb00f5ab5483fbd52d16"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

