var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let left = 0;
  const charSet =  new Set()

  for (let i =0; i<s.length; i++) {
    while (charSet.has(s[i])) {
      charSet.delete(s[left])
      left++
    }
    charSet.add(s[i])
    maxLength = Math.max(maxLength, i-left+1)
  }

  return maxLength;
}