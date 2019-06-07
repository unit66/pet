'use strict'

class ModelMain {
  constructor(pool, id = 0) {
    this.pool = pool;
    this.id = id;
    this.moduleName = 'stack';
  }

  async getData() {
    return await this.pool.collection('pet-stack').find().toArray();
  }

  async postData(item) {
    const data = await this.pool.collection('pet-stack').insertOne(item);
    return data.ops[0]._id;
  }
}

module.exports = ModelMain;
