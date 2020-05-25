var express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extenede: true }));

const arr = ['heloww', 'worl', 'test'];

app.get('/', function (req, res) {
  res.render('index', {
    arr,
  });
});

app.get('/create', function (req, res) {
  res.render('create');
});

app.post('/create', function (req, res) {
  arr.push(req.body.text);
  res.redirect('/');
});

app.listen(config.PORT, function () {
  console.log(`Example app listening on port ${config.PORT}!`);
});

