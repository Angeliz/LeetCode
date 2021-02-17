// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.
// For example,

// Consider the following matrix:

// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// Given target = 5, return true.

// Given target = 20, return false.

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
        if(matrix==false) {return false;}
        let minRow = 0
        let maxCol = matrix[0].length - 1
        while (minRow < matrix.length && 0 <= maxCol) {
            const element = matrix[minRow][maxCol]
            if (element === target) {
              return true
            } else if (element < target) {
              minRow += 1
            } else {
              maxCol -= 1
            }
        }
        return false
};