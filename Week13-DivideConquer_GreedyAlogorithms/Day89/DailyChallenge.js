/**
 * @param {string} s
 * @return {number}
 */
 var minimumSteps = function(s) {
  const n = s.length;
  let cnt =0;
  let ans =0;
  for (let i=0; i<n;  i++) {
      if (s[i] == 0) {
          ans+= cnt;
      } else {
          cnt++
      }
  }
  return ans;
};

// 2938. Separate Black and White Balls

// Input: s = "101"
// Output: 1
// Explanation: We can group all the black balls to the right in the following way:
// - Swap s[0] and s[1], s = "011".
// Initially, 1s are not grouped together, requiring at least 1 step to group them to the right.