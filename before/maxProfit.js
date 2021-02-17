// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Example 1:
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5

// max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
// Example 2:
// Input: [7, 6, 4, 3, 1]
// Output: 0

// In this case, no transaction is done, i.e. max profit = 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
 //85.71
var maxProfit = function(prices) {
    var buy=prices[0];
    var sell=prices[0];
    var result=0;
    var max=0;
    for(let i=0;i<prices.length;i++){
       if(prices[i]<buy){
           result=sell-buy;
           buy=prices[i];
           sell=buy;
       }
       if(prices[i]>sell){
           sell=prices[i];
           result=sell-buy;
       }
       max=Math.max(result,max);
    }
    return max;
};

//一个指针java
// public class Solution {
//     public int maxProfit(int prices[]) {
//         int maxprofit = 0;
//         for (int i = 0; i < prices.length - 1; i++) {
//             for (int j = i + 1; j < prices.length; j++) {
//                 int profit = prices[j] - prices[i];
//                 if (profit > maxprofit)
//                     maxprofit = profit;
//             }
//         }
//         return maxprofit;
//     }
// }

//一个指针，不用嵌套循环
// public int maxProfit(int[] prices) {
//             int ans=0;
//             if(prices.length==0)
//             {
//                 return ans;
//             }
//             int bought=prices[0];                                
//             for(int i=1;i<prices.length;i++)
//             {
//                 if(prices[i]>bought)
//                 {
//                     if(ans<(prices[i]-bought))
//                     {
//                         ans=prices[i]-bought;
//                     }
//                 }
//                 else
//                 {
//                     bought=prices[i];
//                 }
//             }
//      return ans;
// }