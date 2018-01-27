// Given an array and a value, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

// Example:

// Given nums = [3,2,2,3], val = 3,

// Your function should return length = 2, with the first two elements of nums being 2.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 //排序
var removeElement = function(nums, val) {
    if(nums.indexOf(val)!=-1){
        nums.sort(function(a,b){
            return a-b;
        });
        nums.splice(nums.indexOf(val),nums.lastIndexOf(val)-nums.indexOf(val)+1);
        return nums.length;
    }else{
        return nums.length;
    }
};
//循环
var removeElement = function(nums, val) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i]==val) {
			nums.splice(i, 1);
			i--;
		}
	}
	return nums.length;
}

//两个其他方法，java
/*
public int removeElement(int[] nums, int val) {
    int i = 0;
    for (int j = 0; j < nums.length; j++) {
        if (nums[j] != val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}
*/
/*
public int removeElement(int[] nums, int val) {
    int i = 0;
    int n = nums.length;
    while (i < n) {
        if (nums[i] == val) {
            nums[i] = nums[n - 1];
            // reduce array size by one
            n--;
        } else {
            i++;
        }
    }
    return n;
}
*/