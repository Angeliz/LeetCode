/*
 * @Description: Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]). Return the running sum of nums
 */
function runningSum(nums: number[]): number[] {
  let results: number[] = []
  for (let i:number = 0; i < nums.length; i++) {
      let item:number = 0
      for (let j:number = 0; j <= i; j++) {
          item += nums[j]
      }
      results.push(item)
  }
  return results
};


function runningSum2(nums: number[]): number[] {
  let results: number[] = []
  let currentSum: number = 0
  nums.forEach((item:number) => {
    currentSum += item
    results.push(currentSum)
  })
  return results
};

function runningSum3(nums: number[]): number[] {
  for (let i:number = 1; i < nums.length; i++) {
    nums[i] += nums[i-1]
  }
  return nums
};