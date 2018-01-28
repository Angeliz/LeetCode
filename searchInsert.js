// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 1:

// Input: [1,3,5,6], 0
// Output: 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.indexOf(target)>-1){
        return nums.indexOf(target);
    }else{
        for(var i=nums.length-1;i>=0;i--){
            if(target<nums[i]){
                nums[i+1]=nums[i];
            }else{
                return i+1;
            }
        }
        return i+1;
    }
};


//一个很快的做法 java
// class Solution {
// public:
//     int searchInsert(int A[], int n, int target) {
//         if(target <= A[0]) return 0;
//         else if(target > A[n-1]) return n;
//         else {
//             for(int i = 0; i < n-1; i++) {
//                 if(target > A[i] && target <= A[i+1]) return i+1; 
//             }
//         }
//     }
// };