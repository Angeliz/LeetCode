// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// For example,
// If nums = [1,2,3], a solution is:

// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

//DFS
//100
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ans = [], temp = [];
    ans.push(temp);
    dfs(nums,ans,temp,0);
    return ans;
};

let dfs = function(nums, ans, last, min){
    for(let i = min; i<nums.length; i++){
        let cur = [...last];
        cur.push(nums[i]);
        ans.push(cur);
        dfs(nums,ans,cur,i+1);
    }
};

//Backtracking
