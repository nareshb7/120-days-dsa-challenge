/**
 * @param {number} n
 * @return {number}
 */
 var nthUglyNumber = function(n) {
    const factors = [2, 3, 5];
  const offset = [0, 0, 0];
  const ugly = [1];
  n--;
  
  while(n--) {
      const candidates = factors.map((val, i) => ugly[offset[i]] * val);
      const next = Math.min(...candidates);
      candidates.forEach((val, i) => candidates[i] === next ? offset[i]++ : null);
      ugly.push(next);
  }
  return ugly.pop();
};
//264. Ugly Number II
const n = 10
console.log(`${n}th ugly number::`, nthUglyNumber(n))
// Output: 12
// Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.