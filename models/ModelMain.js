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
}

module.exports = ModelMain;
