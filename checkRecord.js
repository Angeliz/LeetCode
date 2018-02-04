// You are given a string representing an attendance record for a student. The record only contains the following three characters:
// 'A' : Absent.
// 'L' : Late.
// 'P' : Present.
// A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

// You need to return whether the student could be rewarded according to his attendance record.

// Example 1:
// Input: "PPALLP"
// Output: True
// Example 2:
// Input: "PPALLL"
// Output: False

/**
 * @param {string} s
 * @return {boolean}
 */
 //78.02
var checkRecord = function(s) {
    let count=0;
   for(let i=0;i<s.length;i++){   
       if(s[i]=="A"){
           count++;
           if(count>1){
               return false;
           }
       }
       if(s[i]=='L'&&i<s.length-2){
           if(s[i+1]=="L"&&s[i+2]=='L'){
               return false;
           }
       }
   }
    return true;
};


// Count three consecutive lates as two absents:

var checkRecord = function(s) {
    let absentCount = 0;
    for (let i = 0; i < s.length && absentCount < 2; i++) {
        absentCount += (s[i] === 'A') + 2 * (s[i] === 'L' && s[i - 1] === 'L' && s[i - 2] === 'L');
    }
    return absentCount < 2;
};
// And now for some one-liners…

var checkRecord = function(s) {
    return s.split('').reduce((c, a, i) => c + (a === 'A') + 2 * (a === 'L' && s[i - 1] === a && s[i - 2] === a), 0) < 2;
};
// Using indexOf:

var checkRecord = function(s, a = 'dummy') {
    return !(~(a = s.indexOf('A')) && ~s.indexOf('A', a + 1) || ~s.indexOf('LLL'));
};
// Using regex:

var checkRecord = function(s) {
    return !/(A.*A|LLL)/.test(s);
};
// Configurable reward criteria:

var checkRecord = function(s, a = 2, l = 3) {
    return s.split('A').length - 1 < a && !~s.indexOf('L'.repeat(l));
};
// Configurable regex:

var checkRecord = function(s, a = 2, l = 3) {
    return !new RegExp(`((A.*){${a}}|L{${l}})`).test(s);
};