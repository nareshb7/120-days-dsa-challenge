/**
 * @param {string} word
 * @return {string}
 */
 var compressedString = function(word) {
  let comp = "";
  let count =0;
  let char = word[0];
  
  for (const c of word) {
      if (c=== char && count <9) {
          count++
      } else {
          comp+=count+char;
          char = c;
          count=1
      }
  }
  comp+=count+char
  return comp
};

// 3163. String Compression III


// Given a string word, compress it using the following algorithm:
// Begin with an empty string comp. While word is not empty, use the following operation:
// Remove a maximum length prefix of word made of a single character c repeating at most 9 times.
// Append the length of the prefix followed by c to comp.
// Return the string comp


// Example
// Input: word = "abcde"
// Output: "1a1b1c1d1e"
// Explanation:
// Initially, comp = "". Apply the operation 5 times, choosing "a", "b", "c", "d", and "e" as the prefix in each operation.
// For each prefix, append "1" followed by the character to comp