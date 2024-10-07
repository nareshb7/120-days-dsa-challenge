/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  let stack = [];
  for (let x of s) {
    if (x == "B" && stack[stack.length - 1] == "A") {
      stack.pop();
    } else if (x == "D" && stack[stack.length - 1] == "C") {
      stack.pop();
    } else stack.push(x);
  }
  return stack.length;
};

// 2696. Minimum String Length After Removing Substrings

// Input: s = "ABFCACDB"
// Output: 2
// Explanation: We can do the following operations:
// - Remove the substring "ABFCACDB", so s = "FCACDB".
// - Remove the substring "FCACDB", so s = "FCAB".
// - Remove the substring "FCAB", so s = "FC".
// So the resulting length of the string is 2.
// It can be shown that it is the minimum length that we can obtain
