// Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Solve it without division and in O(n).

// For example, given [1,2,3,4], return [24,12,8,6].

// Follow up:
// Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 //75
var productExceptSelf = function(nums) {
    let result=1;
    let count=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=0){
          result=result*nums[i];   
        }else{
            count++;
        }
    }
    if(count>1){
        return nums.fill(0);
    }
    if(count==0){
        for(let i=0;i<nums.length;i++){
            nums[i]=result/nums[i];
        }
        return nums;
    }
    if(count==1){
        let index=nums.indexOf(0);
        nums[index]=result;
        nums.fill(0,0,index);
        nums.fill(0,index+1,nums.length);
        return nums;
    }
};

// amazing,java
// public int[] productExceptSelf(int[] nums) {
//     int n = nums.length;
//     int[] res = new int[n];
//     res[0] = 1;
//     for (int i = 1; i < n; i++) {
//         res[i] = res[i - 1] * nums[i - 1];
//     }
//     int right = 1;
//     for (int i = n - 1; i >= 0; i--) {
//         res[i] *= right;
//         right *= nums[i];
//     }
//     return res;
// }