const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if(date == null) return 'Unable to determine the time of year!';

  for (let elem in date) {
    if (typeof(date[elem]) !== 'number') {
      throw Error ('Dangerous');
    }
  }

  const currentMonth = date.getMonth();

if(currentMonth >=2 && 4 >= currentMonth) {
  return 'spring';
} else if (currentMonth >= 5 && 7 >= currentMonth) {
  return 'summer';
} else if (currentMonth >= 8 && 10 >= currentMonth) {
  return 'autumn';
} else if (currentMonth == 0 || currentMonth == 1 || currentMonth == 11 ) {
  return 'winter';
} 

};
