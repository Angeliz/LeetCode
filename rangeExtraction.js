// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-6,-3-5,7-11,14,15,17-20"

function solution(list){
  // TODO: complete solution
     var arr = [];
     var arr2 = [];
     for (var x = 0; x < list.length -1; x++) {
         arr.push(list[x + 1] - list[x]);
     }
     arr.push(0);
     var count = 0;
     for (var y = 0; y < arr.length; y++) {
         if(arr[y] == 1) {
             count++;
         } else if (count < 2) {
             if (count == 0){
            arr2.push(list[y]);
             } else {
             arr2.push(list[y - 1]);
             arr2.push(list[y]);
             count = 0;
             }
         } else {
             arr2.push(list[y - count] + "-" + list[y]);
             count = 0;
         }
    }
    
     return arr2.join(',');
 }