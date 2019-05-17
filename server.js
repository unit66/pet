const express = require('express');
const general = require('./routes/general')

const app = express();
const port = process.env.PORT || 666;

app.use('/', general);

app.listen(port, function() {
  console.log('Express Server started');
})
