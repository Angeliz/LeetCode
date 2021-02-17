// Given two integer arrays A and B, return the maximum length of an subarray that appears in both arrays.

// Example 1:
// Input:
// A: [1,2,3,2,1]
// B: [3,2,1,4,7]
// Output: 3
// Explanation: 
// The repeated subarray with maximum length is [3, 2, 1].
// Note:
// 1 <= len(A), len(B) <= 1000
// 0 <= A[i], B[i] < 100


/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
 //86.67
var findLength = function(A, B) {
    if(A == null||B == null) return 0;
        let m = A.length;
        let n = B.length;
        let max = 0;
        //dp[i][j] is the length of longest common subarray ending with nums[i] and nums[j]
        let dp=new Array(m+1);
        for(let i=0;i<m+1;i++){
            dp[i]=new Array(n+1).fill(0);
        }
        for(let i = 0;i <= m;i++){
            for(let j = 0;j <= n;j++){
                if(i == 0 || j == 0){
                    dp[i][j] = 0;
                }
                else{
                    if(A[i - 1] == B[j - 1]){
                        dp[i][j] = 1 + dp[i - 1][j - 1];
                        max = Math.max(max,dp[i][j]);
                    }
                }
            }
        }
        return max;
    }