/**
 * @description Given an array nums of integers, return how many of them contain an even number of digits.
 */

/**
 * @param {number[]} nums
 * @return {number}
 * @runtime 80 ms, faster than 55.20%
 * @memory 41 MB, less than 15.38% 
 */
var findNumbers = function(nums) {
  let res = 0
  for (let item of nums) {
      if (`${item}`.length % 2 === 0) {
          res++
      }
  }
  return res
};


/**
 * @param {number[]} nums
 * @return {number}
 * @runtime 72 ms, faster than 90.21% 
 * @memory 41 MB, less than 10.74%
 */
var findNumbers2 = function(nums) {
  let res = 0
  for (let item of nums) {
      if (String(item).length % 2 === 0) {
          res++
      }
  }
  return res
};


/**
 * @param {number[]} nums
 * @return {number}
 * @runtime 68 ms, faster than 97.20%
 * @memory 40.8 MB, less than 26.79% 
 */
var findNumbers3 = function(nums) {
  return nums.filter(item => String(item).length % 2 === 0).length
};


/**
 * @param {number[]} nums
 * @return {number}
 * @runtime 72 ms, faster than 90.21%
 * @memory  40.6 MB, less than 47.76%
 */
var findNumbers4 = function(nums) {
  return nums.filter(item => item.toString().length % 2 === 0).length
};