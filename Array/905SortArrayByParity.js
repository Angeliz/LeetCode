/**
 * @description Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers. Return any array that satisfies this condition.
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 * @runtime 88 ms, faster than 85.66% 
 * @memory 42.7 MB, less than 5.85% 
 */
var sortArrayByParity = function(nums) {
  let odd = []
  let even = []
  for (let item of nums) {
      if (item % 2 === 0) {
          odd.push(item)
      } else {
          even.push(item)
      }
  }
  return [...odd, ...even]
};


/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity2 = function(A) {
    
  var len = A.length, temp;
  
  for (var i = 0, j = len - 1; i < j; ++ i) {
      if (A[i] % 2 !== 0) {
          while (j > i) {
              if (A[j] % 2 === 0) {
                  temp = A[i];
                  A[i] = A[j];
                  A[j] = temp;
                  -- j;
                  break;
              }
              -- j;
          }
      }
  }
  return A;
};


var sortArrayByParity3 = function(nums) {
  let j=0;
  for(let i=0; i< nums.length; i++){
      if(nums[i]%2 === 0){
          [nums[i],nums[j]] = [nums[j],nums[i]]
          j++;
      }
  }
  return nums;
};