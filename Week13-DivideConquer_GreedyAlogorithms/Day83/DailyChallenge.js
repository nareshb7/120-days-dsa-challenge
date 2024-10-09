/**
 * @param {string} s
 * @return {number}
 */
 var minAddToMakeValid = function(s) {
  let open =0, close =0;
  
  for (let i=0; i<s.length ; i++) {
      const ch = s[i]
      if (ch === "(") {
          open++
      } else {
          if (open > 0) {
              open--
          } else {
              close++
          }
      }
  }
  return open+ close
};
// 921. Minimum Add to Make Parentheses Valid

// Input: s = "())"
// Output: 1