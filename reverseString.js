// Write a function that takes a string as input and returns the string reversed.

// Example:
// Given s = "hello", return "olleh".

/**
 * @param {string} s
 * @return {string}
 */
 // 34.58
var reverseString = function(s) {
    return s.split("").reverse().join("");
};

//不用reverse(),69.63
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var start = 0,
        end = s.length - 1;
    
    var ret = s.split(''); // has to convert to array to reverse 
    
    while (start < end) {
        var tmp = ret[start];     
        ret[start++] = ret[end];
        ret[end--] = tmp;
    }
    
    return ret.join('');
};
