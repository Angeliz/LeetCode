// Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

// Please note that the string does not contain any non-printable characters.

// Example:

// Input: "Hello, my name is John"
// Output: 5

/**
 * @param {string} s
 * @return {number}
 */
 //59.68
var countSegments = function(s) {
    return s.split(" ").filter(function(n){return n}).length;
};