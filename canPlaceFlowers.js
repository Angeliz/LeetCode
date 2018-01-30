// Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.

// Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: True
// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: False
// Note:
// The input array won't violate no-adjacent-flowers rule.
// The input array size is in the range of [1, 20000].
// n is a non-negative integer which won't exceed the input array size.

//50
var canPlaceFlowers = function(flowerbed, n) {
    var count=0;
    var result=0;
    if(flowerbed.indexOf(1)<0){
        return n<=Math.ceil(flowerbed.length/2);
    }
    for(let i=0;i<flowerbed.length;i++){
        if(flowerbed[i]==0){
            count++;
        }
        if(flowerbed[i]==1&&count>1){
            if(flowerbed.indexOf(1)!=i){
                result=result+Math.floor((count-1)/2);
                count=0;
            }else{
                result=result+Math.floor(count/2);   
                count=0;
            }
        }
        if(flowerbed[i]==1&&count<=1){
            count=0;
        }
    }
    result=result+Math.floor(count/2);
    return n<=result;
};

//其他两种思路，java
// public class Solution {
//     public boolean canPlaceFlowers(int[] flowerbed, int n) {
//         int i = 0, count = 0;
//         while (i < flowerbed.length) {
//             if (flowerbed[i] == 0 && (i == 0 || flowerbed[i - 1] == 0) && (i == flowerbed.length - 1 || flowerbed[i + 1] == 0)) {
//                 flowerbed[i] = 1;
//                 count++;
//             }
//             i++;
//         }
//         return count >= n;
//     }
// }

// public class Solution {
//     public boolean canPlaceFlowers(int[] flowerbed, int n) {
//         int i = 0, count = 0;
//         while (i < flowerbed.length) {
//             if (flowerbed[i] == 0 && (i == 0 || flowerbed[i - 1] == 0) && (i == flowerbed.length - 1 || flowerbed[i + 1] == 0)) {
//                 flowerbed[i++] = 1;
//                 count++;
//             }
//              if(count>=n)
//                 return true;
//             i++;
//         }
//         return false;
//     }
// }

//100,java
// public class Solution {
//     public boolean canPlaceFlowers(int[] flowerbed, int n) {
//         int count = 0;
//         for(int i = 0; i < flowerbed.length && count < n; i++) {
//             if(flowerbed[i] == 0) {
// 	     //get next and prev flower bed slot values. If i lies at the ends the next and prev are considered as 0. 
//                int next = (i == flowerbed.length - 1) ? 0 : flowerbed[i + 1]; 
//                int prev = (i == 0) ? 0 : flowerbed[i - 1];
//                if(next == 0 && prev == 0) {
//                    flowerbed[i] = 1;
//                    count++;
//                }
//             }
//         }
        
//         return count == n;
//     }
// }