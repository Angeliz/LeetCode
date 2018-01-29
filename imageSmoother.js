// Given a 2D integer matrix M representing the gray scale of an image, you need to design a smoother to make the gray scale of each cell becomes the average gray scale (rounding down) of all the 8 surrounding cells and itself. If a cell has less than 8 surrounding cells, then use as many as you can.

// Example 1:
// Input:
// [[1,1,1],
//  [1,0,1],
//  [1,1,1]]
// Output:
// [[0, 0, 0],
//  [0, 0, 0],
//  [0, 0, 0]]
// Explanation:
// For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
// For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
// For the point (1,1): floor(8/9) = floor(0.88888889) = 0
// Note:
// The value in the given matrix is in the range of [0, 255].
// The length and width of the given matrix are in the range of [1, 150].

/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    var sum=0;
    var result=[];             //声明一维数组        
	for(var i=0;i<M.length;i++){
	    result[i]=[];        //声明二维数组
	}
    var count=0;
    for(var i=0;i<M.length;i++){
        for(var j=0;j<M[0].length;j++){
            count=1;
            sum=M[i][j];
            if(i-1>=0){
                sum=sum+M[i-1][j];
                count++;
                if(j-1>=0){
                    sum=sum+M[i-1][j-1];
                    count++;
                }
                if(j+1<M[0].length){
                    count++;
                    sum=sum+M[i-1][j+1];
                }
            }
            if(j-1>=0){
                sum=sum+M[i][j-1];
                count++;
            }
            if(i+1<M.length){
                count++;
                sum=sum+M[i+1][j];
                if(j+1<M[0].length){
                    count++;
                    sum=sum+M[i+1][j+1];
                }
                if(j-1>=0){
                    sum=sum+M[i+1][j-1];
                    count++;
                }
                
            }
            if(j+1<M[0].length){
                count++;
                sum=sum+M[i][j+1];
            }
            result[i][j]=Math.floor(sum/count);
        }
    }
    return result;
};