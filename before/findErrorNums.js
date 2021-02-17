// The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.

// Example 1:
// Input: nums = [1,2,2,4]
// Output: [2,3]
// Note:
// The given array size will in the range [2, 10000].
// The given array's numbers won't have any order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 //23.61
var findErrorNums = function(nums) {
    nums.sort((a,b)=>a-b);
    let sum=nums.reduce((total,item)=>total+item);
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]==nums[i+1]){
            return [nums[i],(1+nums.length)*(nums.length)/2-sum+nums[i]];
        }
    }
};

//O(1) space java
// public static int[] findErrorNums(int[] nums) {
//     int[] res = new int[2];
//     for (int i : nums) {
//         if (nums[Math.abs(i) - 1] < 0) res[0] = Math.abs(i);
// 	else nums[Math.abs(i) - 1] *= -1;
//     }
//     for (int i=0;i<nums.length;i++) {
//         if (nums[i] > 0) res[1] = i+1;
//     }
//     return res;
// }