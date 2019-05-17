const express = require('express');
const general = require('./routes/general')

const app = express();

app.use('/', general);

app.listen(8000, function() {
  console.log('Express Server started');
})
