// A peak element is an element that is greater than its neighbors.
//
//     Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.
//
//     The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
//
//     You may imagine that nums[-1] = nums[n] = -∞.
//
// Example 1:
//
// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:
//
// Input: nums = [1,2,1,3,5,6,4]
// Output: 1 or 5
// Explanation: Your function can return either index number 1 where the peak element is 2,
//     or index number 5 where the peak element is 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (nums.length < 2) return 0;
    let l = 0, r = nums.length - 1;
    while (l < r) {
        let m1 = Math.floor((r - l) / 3) + l;
        let m2 = Math.ceil((r - l) * 2 / 3) + l;
        if (nums[m1] > nums[m2]) {
            r = m2 - 1
        } else {
            l = m1 + 1
        }
    }
    return r
};