const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let error = new Error("'arr' parameter must be an instance of the Array!");
  let newArr=[];
  if ( Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++){
      if (arr[i] != '--discard-next' && arr[i] != '--discard-prev' && arr[i] != '--double-next' && arr[i] != '--double-prev'){
        newArr.push(arr[i]); 
      } else if (arr[i] == '--discard-next'){
        i++;
      } else if (arr[i] == '--discard-prev') {
        if (arr[i-2] == '--discard-next') {
          continue;
        } else {
          newArr.pop();
        }
        
      } else if (arr[i] == '--double-next') {
        if (i == arr.length - 1 ){
          i=arr.length - 1;
        } else {
          newArr.push(arr[i+1]);
        }
        
      } else if (arr[i] == '--double-prev'){
        if (i == 0){
          i=0;
        } else {
          if ( arr[i-2] == '--discard-next') {
            continue;
          } else {
            newArr.push(arr[i-1]);
          }
          
        }
        
      }
    }
    return newArr;
  } else {
    throw error;
  }
}
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]));
module.exports = {
  transform
};
