const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = "";
  let resultInner = str;
  let separator = "";
  let additionSeparator = "";
  if (options.separator === undefined) {
    separator = "+";
  } else {
    separator = options.separator;
  }
  if (options.additionSeparator === undefined) {
    additionSeparator = "|";
  } else {
    additionSeparator = options.additionSeparator;
  }
  for (let i=0; i<options.repeatTimes; i++){
    for (let j=0; j<options.additionRepeatTimes; j++){
      if (j < options.additionRepeatTimes - 1){
        resultInner += options.addition + additionSeparator;
      } else {
        resultInner += options.addition;
      }
      
    }
    if (i <options.repeatTimes -1) {
      result += resultInner+ separator;
      resultInner = str;
    } else {
      result += resultInner;
      resultInner = str;
    }
    
  }
  return result;
}
// console.log(repeater('STRING', { repeatTimes: 3, separator: '**',addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }));

module.exports = {
  repeater
};
