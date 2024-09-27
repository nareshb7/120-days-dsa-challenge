/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
  let m = word1.length
  let n = word2.length
  let c = new Array(m+1).fill(0)
  c.forEach((x,index)=>{
      c[index] = new Array(n+1)
  })
  let b = []
  for (let j=0;j<=m;j++)
      c[j][0] = j
  for (let j=0;j<=n;j++)
      c[0][j] = j
  
  for (let i=1;i<=m;i++)
      for (let j=1;j<=n;j++) {
          var delta = 0
          if (word1[i-1] != word2[j-1])
              delta = 1
          c[i][j] = Math.min(c[i-1][j]+1,c[i][j-1]+1, c[i-1][j-1]+delta)
      }
      
  return c[m][n]
};

const word1 = "horse", word2 = "ros"
console.log("min Distance::", minDistance(word1, word2))
// Output: 3
// Explanation: 
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')