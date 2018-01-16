/**
 *Write a function to find the longest common prefix string amongst an array of strings.
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs==null||strs.length==0||strs[0]==""){
        return "";
    }
    else{
        var min=strs[0].length;
        for(var i=1;i<strs.length;i++){
            if(strs[i].length<min){
                min=strs[i].length;
            }
        }
        for(var i=min;i>=0;i--){
            var arr=strs.map(function(value){
                return value.slice(0,i);
            })
            var num=1;
            for (var j=1;j<arr.length;j++){
                if(arr[0]==arr[j]){
                    num++;
                }
            }
            if(num==arr.length){
                return arr[0];
            }
        }
        return "";
    }
};
