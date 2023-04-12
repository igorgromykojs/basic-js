const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array) {
    let i = 0;
    while(array.length){
         i++;
         array = array.reduce( (level, el) => {
              if(Array.isArray(el)) level.push(...el);
              return level;
         }, []);
    }
    return i;
  }
}



// const getMaxDepth = arr =>
  

// console.log(getMaxDepth([1, 2, 3, [4, 5]]));
// console.log(getDepth([1, 2, 3, [4, 5]]));



module.exports = {
  DepthCalculator
};
