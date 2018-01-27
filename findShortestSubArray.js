// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

// Example 1:
// Input: [1, 2, 2, 3, 1]
// Output: 2
// Explanation: 
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.
// Example 2:
// Input: [1,2,2,3,1,4,2]
// Output: 6
// Note:

// nums.length will be between 1 and 50,000.
// nums[i] will be an integer between 0 and 49,999.

/**
 * @param {number[]} nums
 * @return {number}
 */
 		var findShortestSubArray = function(nums) {
		    var elements =  findMost(nums);		    
		    // elements=elements.map(function(item){
		    // 	return parseInt(item);
		    // });
		    var min=nums.length;
		    for(let i=0;i<elements.length;i++){
                elements[i]=parseInt(elements[i]);
		        if(nums.lastIndexOf(elements[i])-nums.indexOf(elements[i])+1 < min){
		            min=nums.lastIndexOf(elements[i])-nums.indexOf(elements[i])+1;
		        }
		    }
		    return min;
		};
		function findMost(arr) {
		    if (arr.length === 1) return 1
		    var res = {};
		    var result=[];
		    // 遍历数组
		    for (var i=0,l=arr.length;i<l;i++) {
		        if (!res[arr[i]]) {
		            res[arr[i]] = 1;
		        } else {
		            res[arr[i]]++;
		        }
		    }
		    // 遍历 res
		    var keys = Object.keys(res);
		    var maxNum = 0, maxEle
		    for (var i=0,l = keys.length;i<l;i++) {
		        if (res[keys[i]] > maxNum) {
		            maxNum = res[keys[i]];
		            maxEle = keys[i];
		            result = [];
		        }
		        if(res[keys[i]] == maxNum){
		            result.push(keys[i]);
		        }
		    }
		    return result;
		}