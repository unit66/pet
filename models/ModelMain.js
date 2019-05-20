'use strict'

const ObjectID = require('mongodb').ObjectID;

class ModelMain {
  constructor(pool, id = 0) {
    this.pool = pool;
    this.id = id;
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

  async updateData(item) {
    const data = await this.pool.collection('pet-collection').updateOne(
      {"_id": ObjectID(this.id)},
      { $set : { name: item }},
    );
    return data;
  }

  async deleteData() {
    const data = await this.pool.collection('pet-collection').findOneAndDelete({"_id": ObjectID(this.id)});
    return data;
  }
}

module.exports = ModelMain;
