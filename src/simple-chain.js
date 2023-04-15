const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  arr : [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value === undefined) {this.arr.push(''); return this}
    this.arr.push(`${value}`);
    return this;
  },
  removeLink(position) {

    if (position > this.arr.length || position < this.arr.length + 1 || !Number.isInteger(position)) {
      let error = new Error("You can't remove incorrect link!");
      throw error;
    } else {
      this.arr.splice(position, 1);
      return this;
    }
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

// chainMaker.addLink(6).addLink(4).addLink().removeLink(6.7);


// console.log(chainMaker.arr);

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
