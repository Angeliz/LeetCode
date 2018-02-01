// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
/**
 * @param {number[]} prices
 * @return {number}
 */
 //38.76
var maxProfit = function(prices) {
    var max=0;
    for(let i=0;i<prices.length-1;i++){
        if(prices[i+1]>prices[i]){
            max+=prices[i+1]-prices[i];
        }
    }
    return max;
};