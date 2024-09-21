/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  let res = [];
  function rec_adder(x, n) {
    if (x > n) return;
    res.push(x);
    let pe = x * 10;
    for (let i = 0; i < 10; i++) {
      rec_adder(pe + i, n);
    }
  }
  for (let i = 1; i < 10; i++) {
    rec_adder(i, n);
  }
  return res;
};

// 386. Lexicographical Numbers
const n = 13;
// Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]
