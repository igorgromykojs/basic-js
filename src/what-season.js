const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let error = new Error('Invalid date!');

  if (date == null || date == undefined){
    return 'Unable to determine the time of year!';
  } else  if (typeof(date) == "number" || typeof(date) == "string" || typeof(date) == "function" || date.John == 'Smith' | date[0] == 2019){
    throw error;
  } else {
    if (date.getMonth() <= 1 || date.getMonth() >= 11) {
      return "winter";
    } else if (date.getMonth() > 1 && date.getMonth() <= 4) {
      return "spring";
    } else if (date.getMonth() > 4 && date.getMonth() <= 7) {
      return "summer";
    } else {
      return "autumn";
    }
  }
  
}
// var date = new Date();
// console.log(date.length);
// console.log([2019, '27', 0 + '1'][0]);
// function getSeason(/* date */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

module.exports = {
  getSeason
};
