/**
 * @description Given two integers n and k, construct a list answer that contains n different positive integers ranging from 1 to n and obeys the following requirement:

Suppose this list is answer = [a1, a2, a3, ... , an], then the list [|a1 - a2|, |a2 - a3|, |a3 - a4|, ... , |an-1 - an|] has exactly k distinct integers.
Return the list answer. If there multiple valid answers, return any of them.
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 * @runtime 245 ms, faster than 12.50% of JavaScript online submissions for Beautiful Arrangement II.
 * 40.4 MB, less than 87.50% of JavaScript online submissions for Beautiful Arrangement II.
 */
var constructArray = function(n, k) {
  const res = []
  for (let i = 0; i<n; i++) {
      const current = i+1
      const currentInsert = k+1-i
      
      if (!res.includes(current)) {
          res.push(current) 
          if (currentInsert>0 && currentInsert !== res[res.length-1]) {
              res.push(currentInsert)
          }
      }
      
  }
  return res
};

var constructArray2 = function(n, k) {
  let ans = new Array(n)
  for (let i = 0, a = 1, z = k + 1; i <= k; i++)
      ans[i] = i % 2 ? z-- : a++
  for (let i = k + 1; i < n;)
      ans[i] = ++i
  return ans
};