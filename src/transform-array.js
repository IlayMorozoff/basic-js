const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error("argument's function is not array");
  } else if (arr.length === 0) {
    return [];
  }

  let convertedArray = [];

  for ( let i = 0; i < arr.length; i++ ) {

    if(arr[i] !== '--discard-next' && arr[i] !== '--discard-prev' && arr[i] !== '--double-next' && arr[i] !== '--double-prev') {
      convertedArray.push(arr[i]);

    } else if (arr[i] == '--discard-next' && i !== arr.length - 1) {
      i++;

    } else if (arr[i] == '--double-next' && i !== arr.length - 1) {
      convertedArray.push(arr[i + 1]);
    } else if (arr[i] == '--double-prev' && i !== 0 && arr[i - 2] !== '--discard-next') {
      convertedArray.push(arr[i - 1]);
    } else if (arr[i] == '--discard-prev' && i !== 0 && arr[i - 2] !== '--discard-next') {
      convertedArray.pop(arr[i - 1]);
    }
}


  return convertedArray;
  
};
