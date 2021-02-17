// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// Example:
// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [2,3]


//81.14
var findDuplicates = function(nums) {
    if(nums.length === 0) return [];
    var index, ans =[];
    for(var i = 0; i < nums.length; i++){
        index = Math.abs(nums[i]);
        if(nums[index-1] < 0){
            ans.push(index);
        } else {
            nums[index-1] *= -1;
        }
    }
    return ans;
};