// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 //57.31
var strStr = function(haystack, needle) {
    return haystack.search(needle);
};

//KMP算法
// public int strStr(String haystack, String needle){
//     if (haystack == null || needle == null)
//         return -1;
//     //generate next array, need O(n) time
//     int i = -1, j = 0, m = haystack.length(), n = needle.length();
//     int[] next = new int[n];
//     if (next.length > 0) 
//         next[0] = -1;
//     while (j < n - 1) {
//         if (i == -1 || needle.charAt(i) == needle.charAt(j))
//             next[++j] = ++i;
//         else 
//             i = next[i];
//     }
//     //check through the haystack using next, need O(m) time
//     i = 0; j = 0;
//     while (i < m && j < n) {
//         if (j == -1 || haystack.charAt(i) == needle.charAt(j)) {
//             i++;
//             j++;
//         }
//         else 
//             j = next[j];
//     }
//     if (j == n)
//         return i - j;
//     return -1;
// }

//
// public class Solution {
    
//     private int[] failureFunction(char[] str) {
//         int[] f = new int[str.length+1];
//         for (int i = 2; i < f.length; i++) {
//             int j = f[i-1];
//             while (j > 0 && str[j] != str[i-1]) j = f[j];
//             if (j > 0 || str[j] == str[i-1]) f[i] = j+1;
//         }
//         return f;
//     }

//     public int strStr(String haystack, String needle) {
//         if (needle.length() == 0) return 0;
//         if (needle.length() <= haystack.length()) {
//             int[] f = failureFunction(needle.toCharArray());
//             int i = 0, j = 0;
//             while (i < haystack.length()) {
//                 if (haystack.charAt(i) == needle.charAt(j)) {
//                     i++; j++;
//                     if (j == needle.length()) return i-j;
//                 } else if (j > 0) j = f[j];
//                 else i++;
//             }
//         }
//         return -1;
//     }
// }