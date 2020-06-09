var express = require('express');
app = express();

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function(req, res) {
  res.send('Hello Mars!\n');
});  