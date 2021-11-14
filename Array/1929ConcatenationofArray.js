/**
 * @description Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).Specifically, ans is the concatenation of two nums arrays.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 * @runtime Runtime: 84 ms, faster than 92.63% 
 */
var getConcatenation = function(nums) {
  return nums.concat(nums)
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation2 = function(nums) {
  return [...nums, ...nums]
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation3 = function(nums) {
  nums.push(...nums)
  return nums
};