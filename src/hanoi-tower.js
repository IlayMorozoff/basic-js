const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  
  const turnsSpeedsec = turnsSpeed / 3600;

  const turns = (2 ** disksNumber) - 1;

  const seconds = Math.floor(turns / turnsSpeedsec);
  
  return {
    turns,
    seconds,
  }
};
