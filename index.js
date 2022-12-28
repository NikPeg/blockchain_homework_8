const env = require('env-get');
const Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider(f"https://goerli.infura.io/v3/{env.get('PRIVATE_KEY')}"));
const address = '0xd9145CCE52D386f254917e481eB44e9943F39138';
const ABI = env.get('ABI_VALS');
const MY_ADRESS = '0x03AB6A1EdAe3756cd03da838386d5059a13E334B'
web3.eth.getBalance
const myContract = new web3.eth.Contract(ABI, address, from {MY_ADRESS})

myContract.methods.transfer().call().then(console.log)

let data = myContract.metods.transfer(MY_ADRESS, web3.utils.toHex(0.0000011)).encodeABI()
console.log(data);
