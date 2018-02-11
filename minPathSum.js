// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example 1:
// [[1,3,1],
//  [1,5,1],
//  [4,2,1]]
// Given the above grid map, return 7. Because the path 1→3→1→1→1 minimizes the sum

/**
 * @param {number[][]} grid
 * @return {number}
 */
 //61.45
var minPathSum = function(grid) {
    var m = grid.length,
        n = grid[0].length;
    for (var i=0;i<m;i++){
        for(var j=0;j<n;j++) {
            if(i===0 && j>0) {
                grid[i][j] += grid[i][j-1];
            } 
            if(j===0 && i>0){
                grid[i][j] += grid[i-1][j];
            }
            if(i>0 && j>0) {
               grid[i][j] += grid[i-1][j]>grid[i][j-1]? grid[i][j-1] :grid[i-1][j] ; 
            }
        }
    }
    return grid[m-1][n-1];
};