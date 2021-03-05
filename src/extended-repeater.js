const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  const separator = options.separator || '+';
    // это строка, разделяющая повторения str

  let addition = options.addition;
  // это дополнительная строка, которая будет добавлена после каждого повторения str

  const additionRepeatTimes = options.additionRepeatTimes || 1;
  // устанавливает число повторений addition

  const additionSeparator = options.additionSeparator || '|';
  // это строка, разделяющая повторения addition

  const repeatTimes = options.repeatTimes || 1;
  // устанавливает число повторений str

  if (addition === undefined) {
    addition = '';
  }
  
  let newArr = [];

  for( let i = 0; i < additionRepeatTimes; i++ ) {
    newArr.push(String(addition));
  }
  let additionAndAddtitionSeparator = newArr.join(additionSeparator);

  let newArrTwo = [];

  for (let i = 0; i < repeatTimes; i++) {
    newArrTwo.push(String(str) + additionAndAddtitionSeparator);
  }

  let finishedStr = newArrTwo.join(separator);



  return finishedStr;
};
  