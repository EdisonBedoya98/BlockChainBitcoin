const express = require('express')
const bodyParser = require("body-parser");
const app = express();
const sha256 = require("js-sha256");
const controller = require("./controller.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('API works!!!')
});

app.post('/hash', (req, res) =>{
    var message = req.body.message;   
    var hash = sha256(message);
    res.res({
      "hash" : hash
    });
});

app.post('/proofOfWork', (req, res) =>{
  var hash = req.body.hash;
  var numberOfZeros = req.body.numberOfZeros;
  var ans = controller.proofOfWork(hash, numberOfZeros);  

  res.send({
    "hash" : hash + ans.nonce,
    "nonce" : ans.nonce,
    "newHash" : ans.newHash
  });
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});