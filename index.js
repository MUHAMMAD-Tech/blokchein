
const Blockchain = require('./core/blockchain');
const Transaction = require('./core/transaction');

const myChain = new Blockchain();

myChain.createTransaction(new Transaction('address1', 'address2', 100));
myChain.createTransaction(new Transaction('address2', 'address1', 50));

console.log('\nStarting the miner...');
myChain.minePendingTransactions('minerAddress');

console.log(`\nBalance of miner: ${myChain.getBalanceOfAddress('minerAddress')}`);

console.log('\nBlockchain valid:', myChain.isChainValid());
