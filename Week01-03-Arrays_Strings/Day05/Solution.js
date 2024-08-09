/**
 * @param {string} s
 * @return {boolean}
 */
const isAlphaNum = (c) => {
  const code = c.charCodeAt(0);

  // a-z char codes from 97 -122
  // A-Z char codes from 65-90
  // 0-9 char codes from 48-57
  if (
    (122 >= code && code >= 97) ||
    (90 >= code && code >= 65) ||
    (57 >= code && code >= 48)
  )
    return true;

  return false;
};

var isPalindrome = function (s) {
  
  // Using in buile methods T.C - O(n2), S.C - O(n)
  // s = s.replace(/[^a-z0-9A-Z]/g, "").toLowerCase()
  // let reversed =""
  // for (let i=0; i<s.length; i++) {
  //     reversed = s[i]+ reversed
  // }
  // return s === reversed


  // two pointer approach T.C - O(n), S.C -O(n)
  s = s.toLowerCase();
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    while (l < r && !isAlphaNum(s[l])) {
      l++;
    }
    while (l < r && !isAlphaNum(s[r])) {
      r--;
    }

    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }

  return true;
};


const str = "A man, a plan, a canal: Panama"
console.log('Is Palindrome::', isPalindrome(str))