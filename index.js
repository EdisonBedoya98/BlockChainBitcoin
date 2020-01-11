const express = require('express')
const bodyParser = require("body-parser");
const app = express();
const sha256 = require("js-sha256");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/sha256', (req, res) =>{
    var info=req.body.info;   
    var hash = sha256(info);
    console.log("Hash info = "+hash);
    res.end(hash);
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});