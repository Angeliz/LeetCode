/**
 * @description Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
 * @param {number[]} arr
 * @return {boolean}
 * @runtime 72 ms, faster than 95.14% of JavaScript online submissions for Valid Mountain Array.
 * @memory 41.9 MB, less than 46.92% of JavaScript online submissions for Valid Mountain Array.
 */
var validMountainArray = function(arr) {
  if (arr.length <= 1) {
      return false
  }
  let before = arr[0]
  let increasing = true
  for (let i = 1; i<arr.length; i++) {
      if (arr[i] > before) {
          if (increasing === false) {
              return false
          }
      } else if (arr[i] === before){
          return false
      } else if (arr[i] < before) {
          if (i === 1) {
              return false
          }
          increasing = false
      }
      before = arr[i]
  }
  if (increasing === true) {
      return false
  }
  return true
};


/**
 * @param {number[]} arr
 * @return {boolean}
 * @runtime 98%
 */
var validMountainArray = function(arr) {
  if(arr.length < 3) return false
    
  let increasing = true
  for(let i = 1; i < arr.length ; i++){
      if(increasing){
          if(arr[i - 1] >= arr[i]) return false;
          if(arr[i - 1] < arr[i] && arr[i] > arr[i+1]) increasing = false
      }
      else if(!increasing){
          if(arr[i - 1] <= arr[i]) return false
      }
  }

  return !increasing
};