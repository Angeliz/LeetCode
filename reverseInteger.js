// Example 1:
// Input: 123
// Output:  321

// Example 2:
// Input: -123
// Output: -321

// Example 3:
// Input: 120
// Output: 21
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var string=x+"";
    var str=string;
    for(var i=string.length-1;i>=0&&string[i]=='0';i--){
        str=string.slice(0,string[i]);
    }
    var resStr="";
    var resNum=0;
    if(str[0]=='-'){
        resStr=resStr+"-";
        for(var i=str.length-1;i>0;i--){
            resStr=resStr+str[i];
        }
        resNum=parseInt(resStr);
        return resNum;
    }
    else{
        for(var i=str.length-1;i>=0;i--){
            resStr=resStr+str[i];
        }
        resNum=parseInt(resStr);
        return resNum;
    }
};