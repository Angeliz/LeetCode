// Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
// Example 1:
// Input: "abab"

// Output: True

// Explanation: It's the substring "ab" twice.
// Example 2:
// Input: "aba"

// Output: False
// Example 3:
// Input: "abcabcabcabc"

// Output: True

// Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)

/**
 * @param {string} s
 * @return {boolean}
 */
 //9.19
var repeatedSubstringPattern = function(s) {
    if(s=='') return false;
    if(s.length==1) return false;
    for(let i=1;i<s.length/2+1;i++){
        let str='';
        if(s.length%i==0){
            let len=s.length/i;
            for(let j=0;j<len;j++){
                str=str+s.substr(0,i);
            }
            if(str==s){
                return true;
            }
        }
    }
    return false;
};