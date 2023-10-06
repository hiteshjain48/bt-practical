const HDWalletProvider = require('@truffle/hdwallet-provider')
const {Web3} = require('web3')

const {abi, evm} = require('./compile')

provider = new HDWalletProvider(
    'crouch comfort drill honey add funny student matter census basic valley fly',
    'https://sepolia.infura.io/v3/b2ffcd6515c346a69c59dc1cbb951ed5'
)

const web3 = new Web3(provider)

const deploy = async ()=>{
    const accounts = await web3.eth.getAccounts()
    console.log("Attempting to deploy contract from account", accounts[0])
    const inbox = await new web3.eth.Contract(abi).deploy({
        data: evm.bytecode.object,
        arguments: ['Hi there']
    }).send({
        gas: '1000000',
        from: accounts[0]
    })
    console.log("Contract deployed to ", inbox.options.address)
    provider.engine.stop()
}

deploy()