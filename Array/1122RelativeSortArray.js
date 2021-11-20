/**
 * @description Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.
 */


/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 * @runtime Runtime: 120 ms, faster than 10.30% of JavaScript online submissions for Relative Sort Array.
Memory Usage: 39.6 MB, less than 64.24%
 */
var relativeSortArray = function(arr1, arr2) {
	const newArray = []
	arr1.sort((a,b) => a-b)
  for (const index in arr2) {
      const element = arr2[index]
      const lastIndex = arr1.lastIndexOf(element)
      const firstIndex = arr1.indexOf(element)
      if(firstIndex !== -1) {
        const foundItems = arr1.splice(firstIndex, lastIndex-firstIndex +1 ) 
        newArray.push(...foundItems)
      }
  }
	return [...newArray, ... arr1]
};