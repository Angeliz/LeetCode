function missingNumber(nums: number[]): number {
  for (let i:number = 0; i <= nums.length; i++) {
      if (!nums.includes(i)) {
          return i
      }
  }
};
