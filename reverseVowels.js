// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:
// Given s = "hello", return "holle".

// Example 2:
// Given s = "leetcode", return "leotcede".

// Note:
// The vowels does not include the letter "y".

/**
 * @param {string} s
 * @return {string}
 */
 //75
var reverseVowels = function(s) {
    var arr=s.replace(/[^aeiou]/gi,"").split("").reverse();
    var j=0;
    s=s.split("");
    for(let i=0;i<s.length;i++){
        if(/[aeiou]/i.test(s[i])){
            s[i]=arr[j];
            j++;
        }
    }
    return s.join("");
};

//两个指针，java
// public String reverseVowels(String s) {
//     if(s == null || s.length()==0) return s;
//     String vowels = "aeiouAEIOU";
//     char[] chars = s.toCharArray();
//     int start = 0;
//     int end = s.length()-1;
//     while(start<end){
        
//         while(start<end && !vowels.contains(chars[start]+"")){
//             start++;
//         }
        
//         while(start<end && !vowels.contains(chars[end]+"")){
//             end--;
//         }
        
//         char temp = chars[start];
//         chars[start] = chars[end];
//         chars[end] = temp;
        
//         start++;
//         end--;
//     }
//     return new String(chars);
// }