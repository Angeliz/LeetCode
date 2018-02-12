// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.

// click to show follow up.

// Follow up:
// Did you use extra space?
// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 //29.76
var setZeroes = function(matrix) {
    let arrn=new Array(matrix[0].length).fill(1);
    for(let j=0;j<matrix[0].length;j++){
        for(let i=0;i<matrix.length;i++){
            if(matrix[i][j]==0){
                arrn[j]=0;
                continue;
            }
        }
    }
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j]==0){
                matrix[i]=new Array(matrix[0].length).fill(0);
                continue;
            }
        }
    }
    for(let j=0;j<matrix[0].length;j++){
        for(let i=0;i<matrix.length;i++){
            if(arrn[j]==0){
                matrix[i][j]=0;
            }
        }
    }
};

//AC java
// public void setZeroes(int[][] matrix) {
//     boolean fr = false,fc = false;
//     for(int i = 0; i < matrix.length; i++) {
//         for(int j = 0; j < matrix[0].length; j++) {
//             if(matrix[i][j] == 0) {
//                 if(i == 0) fr = true;
//                 if(j == 0) fc = true;
//                 matrix[0][j] = 0;
//                 matrix[i][0] = 0;
//             }
//         }
//     }
//     for(int i = 1; i < matrix.length; i++) {
//         for(int j = 1; j < matrix[0].length; j++) {
//             if(matrix[i][0] == 0 || matrix[0][j] == 0) {
//                 matrix[i][j] = 0;
//             }
//         }
//     }
//     if(fr) {
//         for(int j = 0; j < matrix[0].length; j++) {
//             matrix[0][j] = 0;
//         }
//     }
//     if(fc) {
//         for(int i = 0; i < matrix.length; i++) {
//             matrix[i][0] = 0;
//         }
//     }
    
// }
