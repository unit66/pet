const express = require('express');
const router = express.Router();
const ModelStack = require('../models/ModelStack');

router.get('/', async (req, res) => {
  const { pool } = req.app.locals;
  const stackData = new ModelStack(pool);
  const data = await stackData.getData();
  res.send(data);
});

router.post('/', async (req, res) => {
  const { pool } = req.app.locals;
  const newStackItem = req.body;
  const stackData = new ModelStack(pool);
  const data = await stackData.postData(newStackItem);
  res.send(data);
});

module.exports = router;
