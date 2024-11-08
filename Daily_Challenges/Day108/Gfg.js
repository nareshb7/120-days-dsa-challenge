class Solution {
  // Function to find minimum number of rotations required
  // to make the array A an array B.
  minRepeats(s1, s2) {
    // your code here
    let repeateds1 = s1;
    let count = 1;
    while (repeateds1.length < s2.length || !repeateds1.includes(s2)) {
      repeateds1 += s1;
      count++;

      if (repeateds1.includes(s2)) {
        return count;
      }

      if (repeateds1.length > s2.length * 2 + s1.length) {
        return -1;
      }
    }
    return count;
  }
}

// Minimum repeat to make substring

// Given two strings s1 and s2. Return a minimum number of times s1 has to be repeated such that s2 is a substring of it. 
// If s2 can never be a substring then return -1.

// Note: Both the strings contain only lowercase letters.

// Input: s1 = "ww", s2 = "www"
// Output: 2
// Explanation: Repeating s1 two times (wwww), s2 is a substring of 
