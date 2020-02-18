const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8082, () => {
  console.log('Example app listening on port 8082!')
});

var Addition=require('./Addition.js');
console.log(Addition.AddNumber(6,2));
require('./request.js')