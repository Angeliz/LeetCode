
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var result=[][];
    if(numRows>=2){
        result[0][0]=1;
        result[1][0]=1;
        result[1][1]=1;
        for(var i=2;i<numRows;i++){
            result[i][0]=1;
            result[i][i]=1;
            for(var j=1;j<i;j++){
                result[i][j]=result[i-1][j-1]+result[i-1][j];
            }
        }
    }
    if(numRows==1){
        result[0][0]=1;
    }
    return result;
};