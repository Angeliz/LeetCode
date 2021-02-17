// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example:

// Input: "babad"

// Output: "bab"

// Note: "aba" is also a valid answer.
 

// Example:

// Input: "cbbd"

// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
//73.13
var longestPalindrome = function(s) {
    var lo=0;
    var maxLen=-1;
    function extendPalindrome(s, j, k) {
        while (j >= 0 && k < s.length && s[j] == s[k]) {
            j--;
            k++;
        }
        if (maxLen < k - j - 1) {
            maxLen = k - j -1;
            lo = j + 1;    
        }
    }
    let len = s.length;
	if (len < 2) return s;
    for (let i = 0; i < len-1; i++) {
     	extendPalindrome(s, i, i);  //assume odd length, try to extend Palindrome as possible
     	extendPalindrome(s, i, i+1); //assume even length.
    }
    return s.substr(lo,maxLen);
};