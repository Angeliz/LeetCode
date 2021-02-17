// Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.

// Example 1:
// Input: [1,12,-5,-6,50,3], k = 4
// Output: 12.75
// Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
// Note:
// 1 <= k <= n <= 30,000.
// Elements of the given array will be in the range [-10,000, 10,000].

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var sum=0;
    var max= Number.NEGATIVE_INFINITY ;
    for(var i=0;i<nums.length;i++){
        if(i>k-1){
            sum=sum-nums[i-k]+nums[i];
        }else{
            sum=sum+nums[i];
        }
        if(i>=k-1&&sum>max){
            max=sum;
        }
    }
    return max/k;
};

//其他解法，似乎没有更好。。
// public class Solution {
// 	public double findMaxAverage(int[] nums, int k) {
// 		int[] sum = new int[nums.length];
// 		sum[0] = nums[0];
// 		for (int i = 1; i < nums.length; i++)
// 		sum[i] = sum[i - 1] + nums[i];
// 		double res = sum[k - 1] * 1.0 / k;
// 		for (int i = k; i < nums.length; i++) {
// 			res = Math.max(res, (sum[i] - sum[i - k]) * 1.0 / k);
// 		}
// 		return res;
// 	}
// }