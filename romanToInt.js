/**Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.
罗马数字有如下符号：

基本字符	I	V	X	L	C	D	M
对应阿拉伯数字	1	5	10	50	100	500	1000

计数规则：
相同的数字连写，所表示的数等于这些数字相加得到的数，例如：III = 3
小的数字在大的数字右边，所表示的数等于这些数字相加得到的数，例如：VIII = 8
小的数字，限于（I、X和C）在大的数字左边，所表示的数等于大数减去小数所得的数，例如：IV = 4
正常使用时，连续的数字重复不得超过三次
在一个数的上面画横线，表示这个数扩大1000倍（本题只考虑3999以内的数，所以用不到这条规则）

其次，罗马数字转阿拉伯数字规则（仅限于3999以内）：

从前向后遍历罗马数字，如果某个数比前一个数小，则加上该数。反之，减去前一个数的两倍然后加上该数
*/


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var result=charToInt(s.charAt(0));
    var pre;
    var cur;
    for(var i=1;i<s.length;i++){
        pre=charToInt(s.charAt(i-1));
        cur=charToInt(s.charAt(i));
        if(pre>=cur){
            result=cur+result;
        }
        else{
            result=cur-2*pre+result;
        }
    }
    return result;
    
};
function charToInt(c) {  
        var data;  
        switch (c) {  
            case 'I':  
                data = 1;  
                break;  
            case 'V':  
                data = 5;  
                break;  
            case 'X':  
                data = 10;  
                break;  
            case 'L':  
                data = 50;  
                break;  
            case 'C':  
                data = 100;  
                break;  
            case 'D':  
                data = 500;  
                break;  
            case 'M':  
                data = 1000;  
                break;  
        }  
  
        return data;  
    }  
