  
const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arrayForCheck) {

    const check =  Array.isArray(arrayForCheck);
    
    if (check) {
      if(arrayForCheck.length === 0) {
        return 1;
      } else {
        return Math.max(...arrayForCheck.map(this.calculateDepth, this)) + 1;
      }
    }
    return 0;
  }
};