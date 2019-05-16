'use strict'

class ModelMain {
  constructor() {
    this.moduleName = 'general';
  }

  async getHeader() {
    const header = `Welcome to ${this.moduleName} page`;
    return header;
  }
}

module.exports = ModelMain;
