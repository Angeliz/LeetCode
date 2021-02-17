// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Note: Given n will be a positive integer.


// Example 1:

// Input: 2
// Output:  2
// Explanation:  There are two ways to climb to the top.

// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: 3
// Output:  3
// Explanation:  There are three ways to climb to the top.

// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// 数组“步骤”代表有多少种不同的方法爬上每个级别（索引从0开始，所以0表示级别1，1表示级别2，等等）。知道它有1个不同的方式爬上楼梯1，2个不同的方式爬上楼梯2是微不足道的。对于楼梯等级n（n> = 3），您可以（1）爬上楼梯n-2，爬上另外2步到达n，或者（2）爬上楼梯n-1，再爬一步到到达 也就是说，steps [n] = steps [n-1] + steps [n-2]。换句话说，达到n级的不同方法的数量是达到n-1级和n-2级的不同方式的总数。

//14.38
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
     var steps=[];
     steps[0]=1;
     steps[1]=2;
     for(var i=2;i<n;i++)
     {
         steps[i]=steps[i-2]+steps[i-1];
     }
     return steps[n-1];
};

// 斐波纳契数,不用数组，直接用变量存储
// public class Solution {
//     public int climbStairs(int n) {
//         if (n == 1) {
//             return 1;
//         }
//         int first = 1;
//         int second = 2;
//         for (int i = 3; i <= n; i++) {
//             int third = first + second;
//             first = second;
//             second = third;
//         }
//         return second;
//     }
// }