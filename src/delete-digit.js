const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString(10).split('').map(int => parseInt(int, 10));
  let str="";
  for (i=0; i<arr.length; i++) {
    if (arr[i]>=arr[i+1]) {
      str+=arr[i];

    } else {
      for (k=i+1; k<arr.length; k++) {
        str+=arr[k];
      }
      return +str;

    }
    
  }
  return +str.replace(undefined, '');
}

// console.log(deleteDigit(654321));

// if (arr[0] < arr[1]) {
//   arr.splice(0, 1);
//   return +arr.join('');
// } else if (arr[0] > arr[1]) {
//   arr.splice(arr.length - 1, 1);
//   return +arr.join('');
// } else if (arr[0] == arr[1] && arr[0] < arr[2]) {
//   arr.splice(0, 1);
//   return +arr.join('');
// } else if (arr[0] == arr[1] && arr[0] >= arr[2]) {
//   arr.splice(arr.length - 1, 1);
//   return +arr.join('');
// }

// function deleteDigit(n) {
//   let arr = n.toString(10).split('').map(int => parseInt(int, 10));


//   if (arr[0]<arr[1]) {
//     arr.splice(0, 1);
//     return arr.join('');
//   } else if (arr[0]>arr[1]){
//     arr.splice(arr.length-1, 1);
//     return arr.join('');
//   } else if (arr[0]==arr[1] && arr[0]<arr[2]){
//     arr.splice(0, 1);
//     return arr.join('');
//   } else if (arr[0]==arr[1] && arr[0]>=arr[2]) {
//     arr.splice(arr.length-1, 1);
//     return arr.join('');
//   }
// }
// let minValue = Math.min.apply(null, arr);
// let newArr=[];
// let res = '';

// if (arr[0]<=arr[1]) {
//   for (i=1; i<arr.length; i++){
//     if (arr[i]>arr[i-1]){
//       arr.splice(i-1, 1);
//       res = arr.join('');
//       return res;
//   } else {
    
//   }
//   return res;
// }
  
// } else {
//   newArr = arr.filter(item => item != minValue);
//   res = newArr.join('');
//   return res;
// }

// console.log(deleteDigit(776));

module.exports = {
  deleteDigit
};
