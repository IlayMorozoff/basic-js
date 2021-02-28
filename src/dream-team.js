const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  let clearArray = [];

  if (!(Array.isArray(members))) return false;

  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) == 'string') {
      clearArray.push(members[i]);
  } 
}

const firstLetterFromClearArray = clearArray.map((item) => item.trim()).map((item) => item[0]);

  return firstLetterFromClearArray.map((item) => item.toLowerCase()).sort().join('').toLocaleUpperCase();
};
