// Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

// The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

// Example 1:
// Input: "UD"
// Output: true
// Example 2:
// Input: "LL"
// Output: false

/**
 * @param {string} moves
 * @return {boolean}
 */
 //0.14
var judgeCircle = function(moves) {
    moves=moves.split('').sort().join('');
    while(/LR|DU/.test(moves)){
        moves=moves.replace(/LR|DU/,'');
    }
    return !moves.length;
};

//java
// class Solution {
//     public boolean judgeCircle(String moves) {
//         int x = 0, y = 0;
//         for (char move: moves.toCharArray()) {
//             if (move == 'U') y--;
//             else if (move == 'D') y++;
//             else if (move == 'L') x--;
//             else if (move == 'R') x++;
//         }
//         return x == 0 && y == 0;
//     }
// }

// Don’t use let unnecessarily, because inefficient.
// Don’t use map, inefficient.

// 1,000,000 times in 187ms

    var x = 0, y = 0;
    for (var i = 0; i < moves.length; i++) {
        if (moves[i] === 'L') {
            x--;
        } else if (moves[i] === 'R') {
            x++;
        } else if (moves[i] === 'D') {
            y--;
        } else if (moves[i] === 'U') {
            y++;
        }
    }
    return x === 0 && y === 0;
// 1,000,000 times in 248ms

    let x = 0, y = 0;
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === 'L') {
            x--;
        } else if (moves[i] === 'R') {
            x++;
        } else if (moves[i] === 'D') {
            y--;
        } else if (moves[i] === 'U') {
            y++;
        }
    }
    return x === 0 && y === 0;
// 1,000,000 times in 201ms

    var L = 0, R = 0, U = 0, D = 0;
    for (var i = 0; i < moves.length; i++) {
        if (moves[i] === 'L') {
            L++;
        } else if (moves[i] === 'R') {
            R++;
        } else if (moves[i] === 'U') {
            U++;
        } else if (moves[i] === 'D') {
            D++;
        }
    }
    return L === R && U === D;
// 1,000,000 times in 2165ms

    var obj = { L: 0, R: 0, U: 0, D: 0 };
    for (var i = 0; i < moves.length; i++) {
        obj[moves[i]]++;
    }
    return obj.L === obj.R && obj.U === obj.D;