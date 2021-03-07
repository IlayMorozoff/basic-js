const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array:[],

  getLength() {
    return this.array.length;
  },

  addLink(value) {
    this.array.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (Math.ceil(position) !== position || position === undefined || position <= 0) {
      this.array = []; 
      throw new Error('it is invalid position, fix it please');
    }
    this.array.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.array.reverse();
    return this;
  },

  finishChain() {

    let arrayToString = this.array.join('~~');
    this.array = []; 
    return arrayToString;
  }
};

module.exports = chainMaker;
