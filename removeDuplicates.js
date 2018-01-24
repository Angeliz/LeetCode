// Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example:

// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
// It doesn't matter what you leave beyond the new length.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (let i=0;i<nums.length;i++){
        if(nums.indexOf(nums[i])>-1&&nums.indexOf(nums[i])<i){
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length;
};