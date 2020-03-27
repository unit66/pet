const express = require('express');
const general = require('./routes/general');
const stack = require('./routes/stack');
const path = require('path');
const favicon = require('serve-favicon');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 666;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true`;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use('/api', general);
app.use('/api/stack', stack);

app.use(express.static(path.join(__dirname, 'client', 'public')));
app.get(/^(?!\/data\/)\S*/, (req, res) => {
  res.sendFile(path.resolve('client', 'public', 'index.html'));
});

MongoClient.connect(uri, { useNewUrlParser: true }, function (err, database) {
  if (err) {
    return console.log(err)
  }
  app.locals.pool = database.db('pet-db');

  app.listen(port, function() {
    console.log('Express Server started');
  });
});
