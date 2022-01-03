/**
 * @description You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.

In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may be more than one ball in some boxes.

Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.

Each answer[i] is calculated considering the initial state of the boxes.
 * @param {string} boxes
 * @return {number[]}
 * @runtime 276 ms, faster than 54.68% of JavaScript online submissions for Minimum Number of Operations to Move All Balls to Each Box.
 * 41.9 MB, less than 71.16% of JavaScript online submissions for Minimum Number of Operations to Move All Balls to Each Box.
 */
var minOperations = function(boxes) {
  const result = []
  for (let i = 0; i < boxes.length; i++) {
      let flag = i
      let path = 0
      for (let j = 0; j < boxes.length; j++) {
          if (i !== j && boxes[j]==='1') {
              path += Math.abs(j-i)
          }
      }
      result.push(path)
  }
  return result
};

