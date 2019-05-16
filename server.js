const express = require('express');
const general = require('./routes/general')

const app = express();

app.use('/', general);

app.listen(666, function() {
  console.log('Express Server started');
})
