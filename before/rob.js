// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

// Credits:
// Special thanks to @ifanchu for adding this problem and creating all test cases. Also thanks to @ts for adding additional test cases.

/**
 * @param {number[]} nums
 * @return {number}
 */
 //33.48
var rob = function(nums) {
    var rob=0;//max monney can get if rob current house
    var notrob=0;//max money can get if not rob current house
    for(var i=0;i<nums.length;i++){
        var currob=notrob + nums[i];//if rob current value, previous house must not be robbed
        notrob = Math.max(notrob, rob);//if not rob ith house, take the max value of robbed (i-1)th house and not rob (i-1)th house
        rob = currob;
    }
    return Math.max(rob, notrob);
};
