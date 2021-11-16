/**
 * @description Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 */

/**
 * @param {number[]} nums
 * @return {number}
 * @runtime 88 ms, faster than 38.97%
 * @memory 39.9 MB, less than 63.38% 
 */
var maxProduct = function(nums) {
  let max = 0
  for (let i = 0; i<nums.length; i++) {
      for (let j = 0; j<nums.length; j++) {
          if (i !== j) {
              const res = (nums[i]-1)*(nums[j]-1)
              max = res > max ? res : max
          }
      }
  }
  return max
};


/**
 * @description: Faster than 99.42%
 * @param {*} nums
 * @return {*}
 */
var maxProduct2 = function(nums) {
  let flag = false;
  const max = Math.max(...nums);
  const removedBiggest = nums.filter((el) => {
    if (flag || el !== max) {
      return el;
    } else {
      flag = true;
    }
  });
  const biggest = max - 1;
  const secondBiggest = Math.max(...removedBiggest) - 1;
  return biggest * secondBiggest;
};


var maxProduct3 = function(nums) {
  nums.sort((a, b) => b - a);
  return (nums[0] - 1) * (nums[1] - 1);
};