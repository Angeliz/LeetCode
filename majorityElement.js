// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
 // 6.25
var majorityElement = function(nums) {
    if(nums.length==1) return nums[0];
    nums.sort((a,b)=>a-b);
    let count=1;
    for(let i=1;i<nums.length;i++){
        if(nums[i-1]==nums[i]){
            count++;
        }else{
            if(count>nums.length/2){
                return nums[i-1];
            }
            count=1;
        }
    }
    return nums[nums.length-1];
};

var majorityElement = function(nums) {
    var obj = {};
    
    for(var i = 0; i < nums.length; i++){
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
        if(obj[nums[i]] > nums.length / 2)  return nums[i];
    }
    
};

/**

@param {number[]} nums
@return {number}
*/
var majorityElement = function(nums) {
	nums.sort();
	var index=Math.floor((nums.length-1)/2);
	return nums[index];
};