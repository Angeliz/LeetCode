// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

// Example 1:
// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
// Example 2:
// [[0,0,0,0,0,0,0,0]]
// Given the above grid, return 0.
// Note: The length of each dimension in the given grid does not exceed 50.
/**
 * @param {number[][]} grid
 * @return {number}
 */
var result=0;
var max=0;
var cycle= function (i,j,grid){
    if(grid[i][j]==1){
        // 上左右下
        grid[i][j]=-1;
        result++;
        if(i-1>=0&&grid[i-1][j]==1){
            cycle(i-1,j,grid);
        }
        if(j-1>=0&&grid[i][j-1]==1){
            cycle(i,j-1,grid);
        }
        if(j+1<grid[0].length&&grid[i][j+1]==1){
            cycle(i,j+1,grid);
        }
        if(i+1<grid.length&&grid[i+1][j]==1){
            cycle(i+1,j,grid);
        }
    }
}
var maxAreaOfIsland = function(grid) {
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            result=0;
            
            cycle(i,j,grid);
           
            if(result>max){
                max=result;
            }
        }
    }
    return max;
};

//漂亮的方法 DFS
var maxAreaOfIsland = function(grid) {
    var h = grid.length;
    var w = grid[0].length;
    var result = 0;
    function dfs(i, j){
        if(i >= 0 && i < h && j >= 0 && j< w){
            if(grid[i][j] === 1){
                grid[i][j] = 0;
                return 1 + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i + 1, j) + dfs(i, j - 1);
            }
        }    
        return 0;
    }
    for(var x = 0; x < h; x++){
        for(var y = 0; y < w; y++){
            result = Math.max(result, dfs(x, y));
        }
    }
    return result;
};