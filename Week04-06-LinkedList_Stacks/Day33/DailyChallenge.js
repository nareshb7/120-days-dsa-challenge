/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
  const arr = piles;
  let hash = {};
  let len = arr.length;
  if (len === 0) return 0;
  if (len === 1) return arr[0];
  for (let i = 1; i < len; i++) {
    arr[i] += arr[i - 1];
  }
  var dfs = function (M, i) {
    let key = M + "," + i;
    if (key in hash) return hash[key];
    let iTake = 0;
    let res = 0;
    if (i >= len) return 0;
    for (let k = 1; k <= 2 * M && i + k <= len; k++) {
      // take k piles
      let next = dfs(Math.max(k, M), i + k);
      iTake = -~~arr[i - 1] + arr[len - 1] - next;
      res = Math.max(iTake, res);
    }
    hash[key] = res;
    return res;
  };

  return dfs(1, 0);
};

//1140. Stone Game II
const piles = [2, 7, 9, 4, 4];
console.log('Max stones alice can get::', stoneGameII(piles))
// Output: 10;
//Explanation:  If Alice takes one pile at the beginning, Bob takes two piles, then Alice takes 2 piles again.
//Alice can get 2 + 4 + 4 = 10 piles in total. If Alice takes two piles at the beginning, then Bob can take all
//three piles left. In this case, Alice get 2 + 7 = 9 piles in total. So we return 10 since it's larger.
