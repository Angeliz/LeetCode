// Write a program to find the n-th ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

// Note that 1 is typically treated as an ugly number, and n does not exceed 1690.

// Credits:
// Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

/**
 * @param {number} n
 * @return {number}
 */
 //100
 //今天这是中了什么邪……
var nthUglyNumber = function(n) {
    let arr=new Array(n);
    arr[0]=1;
    let c2=0;
    let c3=0;
    let c5=0;
    for(let i=1;i<arr.length;i++){
        while(arr[c2]*2==arr[i-1]){
            c2++;
        }
        while(arr[c3]*3==arr[i-1]){
            c3++;
        }
        while(arr[c5]*5==arr[i-1]){
            c5++;
        }
        arr[i]=Math.min(arr[c2]*2,arr[c3]*3,arr[c5]*5);
    }
    return arr[n-1];
};