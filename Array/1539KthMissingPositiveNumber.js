/**
 * @description Given an array arr of positive integers sorted in a strictly increasing order, and an integer k. Find the kth positive integer that is missing from this array.
 */


/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 * @runtime Runtime: 96 ms, faster than 30.50% of JavaScript online submissions for Kth Missing Positive Number. Memory Usage: 40.6 MB, less than 13.26%
 */
var findKthPositive = function(arr, k) {
  let resArr = []
  for (let i = 1; i<=k+arr.length; i++) {
    if (!arr.includes(i)) {
      resArr.push(i)
    }
  }
  return resArr[k-1]
};


var findKthPositive2 = function(arr, k) {
  let times = k;
  let start = 1;
  let missingNum;
  let idx = 0;
  
  while (times) {
      if (arr[idx] !== start) {
          missingNum = start;
          times--;
      } else {
          idx++ 
      }
      if (!times) return missingNum;
      start++;
  }
  
};