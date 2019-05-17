const express = require('express');
const general = require('./routes/general');
const path = require('path');
const favicon = require('serve-favicon');

const app = express();
const port = process.env.PORT || 666;

app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use('/', general);

app.listen(port, function() {
  console.log('Express Server started');
})
