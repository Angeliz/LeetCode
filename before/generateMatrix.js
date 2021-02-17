// Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

// For example,
// Given n = 3,

// You should return the following matrix:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let result=[];
    for(let i=0;i<n;i++){
        result[i]=new Array(n);
    }
    let top=0;
    let left=0;
    let bottom=n-1;
    let right=n-1;
    let num=1;
    while(top<=bottom&&left<=right){
        for(let i=left;i<=right;i++){
            result[top][i]=num++;
        }
        top++;
        for(let i=top;i<=bottom;i++){
            result[i][right]=num++;
        }
        right--;
        for(let i=right;i>=left;i--){
            result[bottom][i]=num++;
        }
        bottom--;
        for(let i=bottom;i>=top;i--){
            result[i][left]=num++;
        }
        left++;
    }
    return result;
};