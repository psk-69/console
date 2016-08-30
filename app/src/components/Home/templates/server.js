var express = require('express');
var app = express();

app.use(express.static('ui'));

app.get('/', function (req, res) {
  res.sendFile('ui/index.html');
});

app.listen(3000, function () {
  console.log('IMAD course app listening on port 3000!');
});