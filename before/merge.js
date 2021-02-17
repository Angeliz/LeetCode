// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.length = m+n;
    for(var i=0;i<n;i++){
        nums1[m+i]=nums2[i];
    }
    quickSort(nums1,0,m+n-1);
};
function quickSort(keys,begin,end){
    //如果数组有效
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