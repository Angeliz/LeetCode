/**
 * @description Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.
 */

/**
 * @param {number[]} nums
 * @return {number}
 * @runtime Runtime: 632 ms, faster than 5.63% of JavaScript online submissions for Single Number.
Memory Usage: 41.8 MB, less than 60.36% of JavaScript online submissions for Single Number.
 */
var singleNumber = function(nums) {
  for (let item of nums) {
      if (nums.indexOf(item) === nums.lastIndexOf(item)) {
          return item
      }
  }
};


var singleNumber2 = function(nums) {
  return nums.reduce((a, b) => a^b);
};