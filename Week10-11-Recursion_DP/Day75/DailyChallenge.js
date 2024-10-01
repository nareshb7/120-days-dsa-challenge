/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
  const freq = new Array(k).fill(0);

  for (const num of arr) {
    let rem = num % k;
    if (rem < 0) {
      rem += k;
    }
    freq[rem]++;
  }

  if (freq[0] % 2 !== 0) {
    return false;
  }

  for (let i = 1; i <= Math.floor(k / 2); i++) {
    if (freq[i] !== freq[k - i]) {
      return false;
    }
  }

  return true;
};

// 1497. Check If Array Pairs Are Divisible by k

// Input: arr = [1,2,3,4,5,10,6,7,8,9], k = 5
// Output: true
// Explanation: Pairs are (1,9),(2,8),(3,7),(4,6) and (5,10).
