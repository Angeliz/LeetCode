/**
 * @description Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn]. Return the array in the form [x1,y1,x2,y2,...,xn,yn].
 */

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 * @runtime 80 ms, faster than 82.09%
 */
var shuffle = function(nums, n) {
  const res = []
  for (let i = 0; i < n; i++) {
      res.push(nums[i])
      res.push(nums[i+n])
  }
  return res
};

/**
 * @description: faster then 95% of submissions and 78% memory efficient.
 * @param {*} nums
 * @param {*} n
 * @return {*}
 */
var shuffle = function(nums, n) {
  let first = nums.slice(0, nums.length / 2);
  let second = nums.slice(nums.length / 2, nums.length);
  let  k = 0;
  for (let i = 0; i < nums.length; i = i + 2) {
      nums[i] = first[k];
      nums[i + 1] = second[k];
      k++;
  }
  return nums;
};