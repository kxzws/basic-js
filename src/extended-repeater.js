import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  /*str и addition - строки, приводить к строкам
  seperator и additionSeparator - строки
  repeatTimes и additionxRepeatTimes - целые числа, могут быть null/undefined
  обязательный параметр - str, seperator default '+', additionSeparator default '|'*/
  let addArr = [],
    addRes = "";
  if (options.additionRepeatTimes !== undefined && options.addition !== undefined) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      addArr.push(String(options.addition));
    }
    if (options.additionSeparator !== undefined) {
      addRes = addArr.join(options.additionSeparator);
    } else addRes = addArr.join("|");
  }
  if (options.additionRepeatTimes === undefined && options.addition !== undefined) addRes += options.addition;

  let strArr = [],
    strRes = "";
  if (options.repeatTimes !== undefined) {
    for (let i = 0; i < options.repeatTimes; i++) {
      strArr.push(String(str) + addRes);
    }
    if (options.separator !== undefined) {
      strRes = strArr.join(options.separator);
    } else strRes = strArr.join("+");
  }
  if (options.repeatTimes === undefined) strRes += str + addRes;

  return strRes;
  // npm test -- test/extended-repeater.test.js 
  // remove line with error and write your code here
}
