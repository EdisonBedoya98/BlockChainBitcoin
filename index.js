const express = require('express')
const bodyParser = require("body-parser");
const app = express();
const sha256 = require("js-sha256");
const controller = require("./controller.js");
let blockchain = [];
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('API works!!!')
});

app.get('/hashedtransactions', (req, res) => {
  let transactions = req.body.transactions;

  let hashedtransactions = controller.hashedtransactions(transactions);

  res.send({
    hashedtransactions
  });
});


app.post('/hash', (req, res) => {
  let message = req.body.message;
  let hash = sha256(message);
  res.send({
    "hash": hash
  });
});

app.post('/proofOfWork', (req, res) => {
  let hash = req.body.hash;
  let numberOfZeros = req.body.numberOfZeros;
  let ans = controller.proofOfWork(hash, numberOfZeros);

  res.send({
    "hash": hash + ans.nonce,
    "nonce": ans.nonce,
    "newHash": ans.newHash
  });
});

app.post('/createBlock', (req, res) => {
  let transactions = req.body.transactions;
  // let merkleTree = controller.createMerkleTree(transactions);

  let block = controller.createBlock(transactions, blockchain);
  console.log(block)
  blockchain.push(block);
  res.send({
    "block": block.getNonce()
  });
});

app.get('/blockchain', (req, res) => {

  res.send({
    blockchain
  });
});


app.post('/merkleTree', (req, res) => {
  let transactions = req.body.transactions;
  let merkleTree = controller.createMerkleTree(transactions);

  res.send({
    "root": merkleTree.getRoot().getData()
  });
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});