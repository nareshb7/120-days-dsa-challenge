/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  const n = arr.length;
  const newArr = [...arr];
  newArr.sort((a, b) => a - b);
  const map = new Map();
  let rank = 1;
  for (let i = 0; i < n; i++) {
    const val = newArr[i];
    if (!map.has(val)) {
      map.set(val, rank);
      rank++;
    }
  }
  return arr.map((rank) => map.get(rank));
};

// 1331. Rank Transform of an Array
// Input: arr = [40,10,20,30]
// Output: [4,1,2,3]
// Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.
