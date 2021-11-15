/**
 * @description There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0. You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.
 */

/**
 * @param {number[]} gain
 * @return {number}
 * @runtime 68 ms, faster than 89.95% 
 * @memory 38.9 MB, less than 40.64% 
 */
var largestAltitude = function(gain) {
  let current = 0
  let highest = 0
  
  for (let item of gain) {
      current += item
      highest = current > highest ? current : highest
  }
  
  return highest
};

/**
 * @description: Faster than 97.82%
 * @param {*}
 * @return {*}
 */
const largestAltitude2 = g => 
  Math.max(...g.reduce((a,e,i)=> i>0 ? [...a, (e+a[i])] :[...a, e] ,[0]))

// [-5,1,5,0,-7]
// [0]
// i=0; [0, -5]
// i=1; [0, -5, -4]
// i=2; [0, -5, -4, 1]