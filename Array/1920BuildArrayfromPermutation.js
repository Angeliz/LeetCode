/**
 * @description Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it. A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 * @runtime Runtime: 116 ms, faster than 28.00% of JavaScript
 */
var buildArray = function(nums) {
  let ans = []
  for (let i = 0; i<nums.length; i++) {
      ans[i] = nums[nums[i]]
  }
  return ans
};


var buildArray2 = function(nums) {
  let arr = [];
  for(let item of nums) {
      arr.push(nums[item]);
  }
  return arr;
};

var buildArray3 = function(nums) {
  // return nums.map((n, index) => nums[nums[index]])
  return nums.map((n, index) => nums[n])
};
