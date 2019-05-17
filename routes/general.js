const express = require('express');
const router = express.Router();
const ModelMain = require('../models/ModelMain');

router.get('/', async (req, res) => {
  const { pool } = req.app.locals;
  const mainData = new ModelMain(pool);
  const data = await mainData.getData();
  res.send(data);
})

module.exports = router;
