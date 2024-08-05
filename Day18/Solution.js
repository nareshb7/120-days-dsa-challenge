/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// const equalFreq = (curr, freq) => {
//   const SIZE = 256 + 2;
//   for (let i = 0; i < SIZE; ++i) {
//     if (freq[i] > 0 && curr[i] < freq[i]) {
//       return false;
//     }
//   }
//   return true;
// };
//      const n = s.length;
  //         if (n < t.length) return "";

  //         const SIZE = 256 + 2;
  //         const freq = Array(SIZE).fill(0);

  //         for (let c of t) {
  //             freq[c.charCodeAt(0)]++;
  //         }

  //         let l = 0, r = 0;
  //         let minWin = Infinity;
  //         let ans = "";
  //         const curr = Array(SIZE).fill(0);

  //         while (r < n) {
  //             curr[s.charCodeAt(r)]++;
  //             if (equalFreq(curr, freq)) {
  //                 do {
  //                     curr[s.charCodeAt(l)]--;
  //                     l++;
  //                 } while (equalFreq(curr, freq));

  //                 if (minWin > r - l + 2) {
  //                     minWin = r - l + 2;
  //                     ans = s.substring(l - 1, l - 1 + minWin);
  //                 }
  //             }
  //             r++;
  //         }
  //         return ans;
var minWindow = function (s, t) {
  if (t.length === 0 || s.length === 0) return "";
  const tFreq = new Map(); // Step- 1
  for (const val of t) {
    tFreq.set(val, (tFreq.get(val) || 0) + 1);
  }
  let left = 0,right = 0,formed = 0;
  const windowCounts = new Map();
  const required = tFreq.size;
  let minLen = Infinity,minLeft = 0,minRight = 0;
  while (right < s.length) {// Step- 2
    const char = s[right];
    windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

    if (tFreq.has(char) && windowCounts.get(char) === tFreq.get(char)) {
      formed++;
    }
    while (left <= right && formed === required) { //Step- 3
      const char = s[left];
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minLeft = left;
        minRight = right;
      }
      windowCounts.set(char, windowCounts.get(char) - 1);
      if (tFreq.has(char) && windowCounts.get(char) < tFreq.get(char)) {
        formed--;
      }
      left++;
    }
    right++;
  }
  return minLen === Infinity ? "" : s.slice(minLeft, minRight + 1); //Step- 4
};
const s = "ADOBECODEBANC", t = "ABC"
console.log("Min window substring is::", minWindow(s, t)) // Output: "BANC"
