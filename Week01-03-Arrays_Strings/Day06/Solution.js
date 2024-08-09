/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
  //T.C =O(n) , S.C - O(1)
  let l =0; r= s.length -1
  while (l<r) {
      const swap = s[l]
      s[l] = s[r]
      s[r] = swap
      l++
      r--
  }
};

const input = ["h", "e", "l","l", "o"]
reverseString(input)
console.log('Reverse string::',input) // [ 'o', 'l', 'l', 'e', 'h' ]