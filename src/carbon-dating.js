const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let cur = +sampleActivity;
  const k = 0.693/HALF_LIFE_PERIOD;
  const t = Math.log(MODERN_ACTIVITY/cur)/k;
  if (cur != 0 && !isNaN(cur) && typeof(sampleActivity) == "string" && cur > 0){
    if (Math.ceil(t)<0){
      return false;
    } else {
      return Math.ceil(t);
    }
    
  } else{
    return false;
  }
}
// console.log(dateSample("8"));

module.exports = {
  dateSample
};
