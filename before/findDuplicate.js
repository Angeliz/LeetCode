// Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

// Note:
// You must not modify the array (assume the array is read only).
// You must use only constant, O(1) extra space.
// Your runtime complexity should be less than O(n2).
// There is only one duplicate number in the array, but it could be repeated more than once.
// Credits:
// Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

/**
 * @param {number[]} nums
 * @return {number}
 */
 //10.66
var findDuplicate = function(nums) {
    for(let i=0;i<nums.length;i++){
        if(nums.indexOf(nums[i],i+1)!=-1){
            return nums[i];
        }
    }
};