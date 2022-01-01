const express = require('express');
const general = require('./routes/general');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 666;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();
});

app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use('/api', general);

app.use(express.static(path.join(__dirname, 'client', 'public')));
app.get(/^(?!\/data\/)\S*/, (req, res) => {
  res.sendFile(path.resolve('client', 'public', 'index.html'));
});

app.listen(port, function() {
  console.log('Express Server started');
});
