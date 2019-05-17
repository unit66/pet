'use strict'

class ModelMain {
  constructor(pool) {
    this.pool = pool;
    this.moduleName = 'main';
  }

  async getData() {
    const header = `Welcome to ${this.moduleName} page`;
    const data = await this.pool.collection('pet-collection').find().toArray();
    return header + '</br>' + JSON.stringify(data);
  }

  async postData(item) {
    const newItem = {
      name: `New ${item}`,
    }
    const data = await this.pool.collection('pet-collection').insertOne(newItem);
    return data.ops[0]._id;
  }
}

module.exports = ModelMain;
