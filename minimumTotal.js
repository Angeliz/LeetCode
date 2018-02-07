// Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

// For example, given the following triangle
// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

// Note:
// Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.

/**
 * @param {number[][]} triangle
 * @return {number}
 */
 //7.1
var minimumTotal = function(triangle) {
    let result=new Array(triangle.length+1).fill(0);
    for(let i=triangle.length-1;i>=0;i--){
        for(let j=0;j<triangle[i].length;j++){
            result[j]=Math.min(result[j],result[j+1])+triangle[i][j];
        }
    }
    return result[0];
};