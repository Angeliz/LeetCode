/**
 * @description Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

Return any answer array that satisfies this condition.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
  let odd = []
  let even = []
  for (let item of nums) {
      if (item % 2 === 0) {
          odd.push(item)
      } else {
          even.push(item)
      }
  }
  
  let res = []
  for (let i = 0; i<odd.length; i++) {
      res.push(odd[i])
      res.push(even[i])
  }
  
  return res
};


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII2 = function(nums) {
    
  for (let i = 0; i < nums.length; i++) {

      if (!(i % 2 === 0 && nums[i] % 2 === 0) && !(i % 2 !== 0 && nums[i] % 2 !== 0)) {
          
          let swapIndex = i+1;
          if (i % 2 === 0) {
              while (nums[swapIndex] % 2 !== 0) {
                  swapIndex += 1;
              }
          } else {
              while (nums[swapIndex] % 2 === 0) {
                  swapIndex += 1;
              }
          }
          
          let temp = nums[i];
          nums[i] = nums[swapIndex];
          nums[swapIndex] = temp;
      }
  }
  
  return nums;
};