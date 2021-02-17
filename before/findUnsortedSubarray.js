// Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

// You need to find the shortest such subarray and output its length.

// Example 1:
// Input: [2, 6, 4, 8, 10, 9, 15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
// Note:
// Then length of the input array is in range [1, 10,000].
// The input array may contain duplicates, so ascending order here means <=.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    var numbers=[];
    for(var i=0;i<nums.length;i++){
        numbers[i]=nums[i];
    }
    quickSort(nums,0,nums.length-1);
    // nums.sort(function(a,b){
    //     return a-b;
    // })
    var begin;
    var end;
    for(var i=0;i<nums.length;i++){
        if(numbers[i]!=nums[i]){
            begin=i;
            break;
        }
    }
    for(var i=nums.length-1;i>=0;i--){
        if(numbers[i]!=nums[i]){
            end=i;
            break;
        }
    }
    if(begin<end){
       return end-begin+1; 
    }
    else{
        return 0;
    }
    
};
function quickSort(keys,begin,end){
    if(begin>=0&&begin<end&&end<keys.length){
        var i=begin;
        var j=end;
        var vot=keys[i];
        while(i!=j){
            while(i<j&&keys[j]>=vot){
                j--;
            }
            if(i<j){
                keys[i]=keys[j];
                i++;
            }
            while(i<j&&keys[i]<=vot){
                  i++;
            }
            if(i<j){
                keys[j]=keys[i];
                j--;
            }
        }
        keys[i]=vot;
        quickSort(keys,begin,j-1);
        quickSort(keys,i+1,end);
    }
}