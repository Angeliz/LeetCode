// Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note:
// You are not suppose to use the library's sort function for this problem.

// click to show follow up.

// Follow up:
// A rather straight forward solution is a two-pass algorithm using counting sort.
// First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.

// Could you come up with an one-pass algorithm using only constant space?

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 // 100%
 // 大概是人生巅峰了
var sortColors = function(nums) {
    let num0=0;
    let num1=0;
    let num2=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0){
            num0++;
        }else if(nums[i]==1){
            num1++;
        }else{
            num2++;
        }
    }
    for(let i=0;i<nums.length;i++){
        if(i<num0){
            nums[i]=0
        }else if(i<num0+num1){
            nums[i]=1
        }else{
            nums[i]=2
        }
    }
};