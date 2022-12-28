const env = require('env-get');
const Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/9f94443f83614b50a33e805f4f29688a"));
const address = '0xFee0d4862B654EAB811b84F3E513617C1f6ABf67';
const ABI = env.get('ABI_VALS');
const MY_ADRESS = '0xa8b9Fe1990819336E6319E345789E098Bd13fe4c';
console.log(web3.eth.getBalance());
const myContract = new web3.eth.Contract(ABI, address);

myContract.methods.getAge().call().then(console.log); // 0

myContract.methods.getAge(20).call();

myContract.methods.getAge().call().then(console.log); // 20
