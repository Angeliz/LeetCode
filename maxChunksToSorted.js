// Given an array arr that is a permutation of [0, 1, ..., arr.length - 1], we split the array into some number of "chunks" (partitions), and individually sort each chunk.  After concatenating them, the result equals the sorted array.

// What is the most number of chunks we could have made?

// Example 1:

// Input: arr = [4,3,2,1,0]
// Output: 1
// Explanation:
// Splitting into two or more chunks will not return the required result.
// For example, splitting into [4, 3], [2, 1, 0] will result in [3, 4, 0, 1, 2], which isn't sorted.
// Example 2:

// Input: arr = [1,0,2,3,4]
// Output: 4
// Explanation:
// We can split into two chunks, such as [1, 0], [2, 3, 4].
// However, splitting into [1, 0], [2], [3], [4] is the highest number of chunks possible.
// Note:

// arr will have length in range [1, 10].
// arr[i] will be a permutation of [0, 1, ..., arr.length - 1].
//  

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let maxOfLeft = [];
    let minOfRight =[];
        maxOfLeft[0] = arr[0];
        for (let i = 1; i < arr.length; i++) {
            maxOfLeft[i] = Math.max(maxOfLeft[i-1], arr[i]);
        }

        minOfRight[arr.length - 1] = arr[arr.length - 1];
        for (let i = arr.length - 2; i >= 0; i--) {
            minOfRight[i] = Math.min(minOfRight[i + 1], arr[i]);
        }

        let res = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            if (maxOfLeft[i] <= minOfRight[i + 1]) res++;
        }

        return res + 1;
};

//
var maxChunksToSorted = function(arr) {
    var ans = 0, max = 0;
        for (var i = 0; i < arr.length; ++i) {
            max = Math.max(max, arr[i]);
            if (max == i) ans++;
        }
        return ans;
};