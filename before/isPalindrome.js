// Determine whether an integer is a palindrome. Do this without extra space.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var str=x+"";
    var result="";
    for(var i=str.length-1;i>=0;i--){
        result=result+str[i];
    }
    for(var i=str.length-1;i>=0;i--){
        if(str[i]!=result[i]){
            return false;
        }
    }
    return true;
};