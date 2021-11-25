/**
 * @description Given a 0-indexed integer array nums, return true if it can be made strictly increasing after removing exactly one element, or false otherwise. If the array is already strictly increasing, return true. The array nums is strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.length).
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 * @runtime Runtime: 132 ms, faster than 12.99% of JavaScript online submissions for Remove One Element to Make the Array Strictly Increasing. Memory Usage: 38.9 MB, less than 90.26%
 */
var canBeIncreasing = function(nums) {
  let flag = 0
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] <= nums[i-1]) {
          if (nums[i-1] < nums[i+1] || i==nums.length-1) {
              flag = i
          }
          if (nums[i-1] > nums[i+1]) {
              flag = i-1
          }
          break
      }
  }
  if (flag > 0 && flag < nums.length-1) {
      if (nums[flag+1] <= nums[flag-1]) {
          return false
      }
  }
  for (let i = flag+1; i < nums.length; i++) {
      if (nums[i] >= nums[i+1]) {
          return false
      }
  }
  return true
};


/**
 * @param {number[]} nums
 * @return {boolean}
 * @runtime 9.74
 */
var canBeIncreasing2 = function(nums) {
  for (let i = 0; i<nums.length; i++) {
      let newNums = [...nums]
      newNums.splice(i, 1)
      let flag = true
      for (let j = 0; j<newNums.length-1; j++) {
          if (newNums[j] >= newNums[j+1]) {
            flag = false
          }
      }
      if (flag == true) {
        return true
      }
  }
  return false
};

/**
 * 
 * @param {*} nums 
 * @returns 
 * @runtime Runtime: 64 ms, faster than 99.62% of JavaScript online submissions for Remove One Element to Make the Array Strictly Increasing. Memory Usage: 39.3 MB, less than 71.05% of JavaScript online submissions for Remove One Element to Make the Array Strictly Increasing.
 */
const canBeIncreasing3 = (nums) => {
  let removed = false;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      if (removed) {
        return false;
      } else removed = true;

      if (i > 1 && nums[i] <= nums[i - 2]) {
        nums[i] = nums[i - 1];
      }
    }
  }
  return true;
};