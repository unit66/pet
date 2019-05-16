const express = require('express');
const router = express.Router();
const ModelMain = require('../models/ModelMain');

router.get('/', async (req, res) => {
  const mainData = new ModelMain;
  const header = await mainData.getHeader();
  res.send(header);
})

module.exports = router;
