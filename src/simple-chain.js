const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  arr : [],
  res : "",
  resres: "",
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value === undefined) {this.arr.push(''); return this}
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {

    if (position > this.arr.length || position < 1 || !Number.isInteger(position)) {
      let error = new Error("You can't remove incorrect link!");
      this.arr = [];
      throw error;
    } else {
      this.arr.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = this.arr.join('~~');
    this.arr = [];
    return result;
    // res = "";
    // this.arr.forEach(function(item) {
    //   chainMaker.res+= `( ${item} )~~`;
    // });
    // this.arr = [];
    // chainMaker.resres = chainMaker.res.slice(0, -2);
    // return chainMaker.resres;
  }
};
// console.log(chainMaker.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain());


// console.log(chainMaker);

// const chainMaker = {
//   getLength() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   addLink(/* value */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   removeLink(/* position */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   reverseChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   finishChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// };

module.exports = {
  chainMaker
};
