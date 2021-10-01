import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {

  chain: [],

  getLength() {
    // throw new NotImplementedError('Not implemented');
    return this.chain.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    if (String(value)) { this.chain.push(String(value)); return this; }
    this.chain.push(' ');
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    if (typeof position !== typeof 1 || position > this.chain.length || position < 1) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
    // remove line with error and write your code here
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    this.chain.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    let res = '( ' + this.chain.join(' )~~( ') + ' )';
    this.chain = [];
    return res;
    // remove line with error and write your code here
  }
};
