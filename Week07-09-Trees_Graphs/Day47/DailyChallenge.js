/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  let count = "";
  for (let i = 0; i < s.length; i++) {
    count += s.charCodeAt(i) - 96;
  }
  while (k-- > 0 && count.length > 1) {
    let str = 0;
    for (let j = 0; j < count.length; j++) {
      str += Number(count[j]);
    }
    count = str.toString();
  }
  return count;
};

//1945. Sum of Digits of String After Convert
const s = "leetcode",
  k = 2;
console.log("Luckey Number:::", getLucky(s, k));
// Output: 6
// Explanation: The operations are as follows:
// - Convert: "leetcode" ➝ "(12)(5)(5)(20)(3)(15)(4)(5)" ➝ "12552031545" ➝ 12552031545
// - Transform #1: 12552031545 ➝ 1 + 2 + 5 + 5 + 2 + 0 + 3 + 1 + 5 + 4 + 5 ➝ 33
// - Transform #2: 33 ➝ 3 + 3 ➝ 6
// Thus the resulting integer is 6.
