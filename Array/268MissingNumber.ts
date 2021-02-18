/*
 * @Description: Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 */

function missingNumber(nums: number[]): number {
  for (let i:number = 0; i <= nums.length; i++) {
      if (!nums.includes(i)) {
          return i
      }
  }
};

function missingNumber2(nums: number[]): number {
  let s = nums.reduce((a, b) => a + b);
  return (nums.length * (nums.length + 1) / 2) - s;
};
