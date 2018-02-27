// Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. If no such solution, return -1.

// For example, with A = "abcd" and B = "cdabcdab".

// Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").

// Note:
// The length of A and B will be between 1 and 10000.

/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
 // 2.32
var repeatedStringMatch = function(A, B) {
    let count=1;
    let C=A;
    while(A.length<3*B.length||count<3){
        if(A.match(B)!=null){
            return count; 
        }
        A+=C;
        count++;
    }
    return -1;
};
//24
var repeatedStringMatch = function (A, B) {
    if (A.includes(B)) {
        return 1;
    }
    let time = 1;
    while (true) {
        let res = A.repeat(++time);
        if (res.includes(B)) {
            return time;
        }else if (res.length > 2*B.length) {
            return -1;
        }
    }
};