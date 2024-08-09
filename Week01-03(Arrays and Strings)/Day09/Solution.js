/**
 * @param {string} s
 * @return {number}
 */
//  let maxLength = 0;
//  let start = 0;
//  const charIndexMap = new Map();
 
//  for (let end = 0; end < s.length; end++) {
//      const currentChar = s[end];
     
//      if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= start) {
//          start = charIndexMap.get(currentChar) + 1;
//      }
     
//      charIndexMap.set(currentChar, end);
//      maxLength = Math.max(maxLength, end - start + 1);
//  }
 
//  return maxLength;

 var lengthOfLongestSubstring = function(s) {
    let a_pointer  = 0;
    let b_pointer =0;
    let max =0
    const hashSet= new Set()
    while (b_pointer < s.length) {
        if (!hashSet.has(s[b_pointer])) {
            hashSet.add(s[b_pointer])
            b_pointer++;
            max =  Math.max(hashSet.size, max)
        } else {
            hashSet.delete(s[a_pointer])
            a_pointer++
        }
    }
    return max
};

const s = "abcabcbb"
//Output: 3
// Explanation: The answer is "abc", with the length of 3.
console.log('Length of longest Substring is::: ', lengthOfLongestSubstring(s))