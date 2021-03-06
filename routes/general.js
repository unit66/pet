const express = require('express');
const router = express.Router();
const ModelMain = require('../models/ModelMain');

//временная функция вывода, удалить!
router.get('/', async (req, res) => {
  const { pool } = req.app.locals;
  const mainData = new ModelMain(pool);
  const data = await mainData.getData();
  res.send(data);
});

router.get('/', async (req, res) => {
  const { pool } = req.app.locals;
  const mainData = new ModelMain(pool);
  const data = await mainData.getData();
  res.send(data);
});

router.post('/', async (req, res) => {
  const { pool } = req.app.locals;
  const newData = `${Date.now()} obj`;
  const mainData = new ModelMain(pool);
  const data = await mainData.postData(newData);
  res.send(data);
});

router.put('/:id', async (req, res) => {
  const { pool } = req.app.locals;
  const id = req.params.id;
  const newData = req.body.name;
  console.log(newData)
  const mainData = new ModelMain(pool, id);
  const data = await mainData.updateData(newData);
  res.send(data);
});

router.delete('/:id', async (req, res) => {
  const { pool } = req.app.locals;
  const id = req.params.id;
  const mainData = new ModelMain(pool, id);
  const data = await mainData.deleteData();
  res.send(data);
});

module.exports = router;
