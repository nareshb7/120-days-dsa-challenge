/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function (s, k) {
  const n = s.length;
  const aCode = "a".charCodeAt(0);
  const count = [0, 0, 0];

  for (const c of s) {
    count[c.charCodeAt(0) - aCode]++;
  }
  if (Math.min(...count) < k) {
    return -1;
  }
  let min = Infinity;

  let l = 0;
  for (let r = 0; r < n; r++) {
    count[s.charCodeAt(r) - aCode]--;

    while (Math.min(...count) < k) {
      count[s.charCodeAt(l) - aCode]++;
      l++;
    }

    min = Math.min(min, n - (r - l + 1));
  }
  return min;
};

// 2516. Take K of Each Character From Left and Right

// You are given a string s consisting of the characters 'a', 'b', and 'c' and a non-negative integer k. Each minute, you may take either the
// leftmost character of s, or the rightmost character of s.

// Return the minimum number of minutes needed for you to take at least k of each character, or return -1 if it is not possible to take
// k of each character.

// Example 1:

// Input: s = "aabaaaacaabc", k = 2
// Output: 8
// Explanation:
// Take three characters from the left of s. You now have two 'a' characters, and one 'b' character.
// Take five characters from the right of s. You now have four 'a' characters, two 'b' characters, and two 'c' characters.
// A total of 3 + 5 = 8 minutes is needed.
// It can be proven that 8 is the minimum number of minutes needed
