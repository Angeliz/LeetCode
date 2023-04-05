/**
 * @Author 67
 * @Date 2023-04-05 13:08:57
 * @Description Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
 */

var twoSum = function(nums, target) {
  const map = new Map();

  for (let i =0; i < nums.length; i++) {
    const another = target - nums[i];
    if (map.get(another) !== undefined) {
      return [i, map.get(another)]
    };
    map.set(nums[i], i)
  }
};

// var twoSum = function(nums, target) {
//   const obj = {}

//   for (let i =0; i < nums.length; i++) {
//     const another = target - nums[i];
//     if (obj[another] !== undefined) return [i, obj[another]];
//     obj[nums[i]] = i;
//   }
// };