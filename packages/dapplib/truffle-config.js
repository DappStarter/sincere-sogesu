require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note soap undo grace option equal gesture'; 
let testAccounts = [
"0x0c715e3160944045fb2adb2576b497c1fa67fb104ca0baa0d2bdad688b978605",
"0xc4e9be4c40486db2438ca499397554db66b8ed826c7cc2e6370923c736639f05",
"0xf861261d2322345bff44a7b4ec764067d04f1414231ad103a2d9b44f16b10c52",
"0xdc889127648f0cd27acb2e42cf4951ffe92150ad1a841f571c0b4e500bac2572",
"0xa3a62ab2b5c79083877cf37a477a65b33813219215a1ec4acc85cf2d57549eea",
"0x5e65b2ba29c495d5954a8eae498c871ab198f9032dfb618971d388d8833b08d5",
"0xd954b48df746e5d52f93f4b0f6f945df1dae982ad7142d2f9b174519f39894cf",
"0x9ed776a62bfcfbe3fc890d7289228b37e80e4b577be65d1081b7716e412056ec",
"0xf43ad4c11313686f631fdaf6e91ae8f34c8efec35d3a5bb0bd21a817e8fbf825",
"0x3a42ed0640cdacf0235dc9ed2a9ac9a1a3dd15622b1e7e31eb1888023c1da88d"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
