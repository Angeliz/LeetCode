// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

/**
 * @param {string} s
 * @return {boolean}
 */
 //43
var isValid = function(s) {
    var r=/\{\}|\[\]|\(\)/;
    while(r.test(s)){
        s=s.replace(r,"");
    }
    return !s.length;
};

//栈 51.8
var map = {
    "(": ")",
    "[": "]",
    "{": "}"
} 

var isValid = function(s) {
    var stack = [];
    
    for (var i = 0; i < s.length; i++) {
        var el = s[i];
        
        if (map[el]) {
            stack.push(map[el]);
        } else {
            if (el !== stack.pop()) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};