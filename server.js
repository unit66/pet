const express = require('express');
const general = require('./routes/general');
const path = require('path');
const favicon = require('serve-favicon');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = process.env.PORT || 666;

const uri = 'mongodb+srv://db_admin:admin1@clusterfuck-kwyqt.mongodb.net/pet-db?retryWrites=true';

app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use('/', general);

MongoClient.connect(uri, { useNewUrlParser: true }, function (err, database) {
  if (err) {
    return console.log(err)
  }
  app.locals.pool = database.db('pet-db');

  app.listen(port, function() {
    console.log('Express Server started');
  });
})﻿;
