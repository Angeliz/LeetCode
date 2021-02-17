// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times. The algorithm should run in linear time and in O(1) space.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 // 46
var majorityElement = function(nums) {
    var numsLength=nums.length;

    if(numsLength===0)
    {
        return nums;
    }

    var hasOb={};
    var result=[];

    for(var i=0; i < numsLength; i++)
    {
        if(result.indexOf(nums[i])!==-1)
            continue;

        if(!hasOb[nums[i]])
        {
            hasOb[nums[i]]=1;
        }
        else
        {
            hasOb[nums[i]]+=1;
        }

        if(hasOb[nums[i]]>Math.floor(numsLength/3))
        {
            result.push(nums[i]);
        }
    }

    return result;
};