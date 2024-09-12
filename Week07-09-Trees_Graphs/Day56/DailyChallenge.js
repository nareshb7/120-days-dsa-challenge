/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 var countConsistentStrings = function(allowed, words) {
  const arr = Array(26).fill(false);
 for (let w of allowed){
     let idx = w.charCodeAt(0) - '97'
     //console.log(idx)
     arr[idx] = true
 }
 let cnt = 0
 for (let word of words){
     for (let ch of word){
         let idx = ch.charCodeAt(0) - '97'
         if (arr[idx] === false){
             cnt++
             break
         }
     }
 }
 return words.length - cnt
};

// 1684. Count the Number of Consistent Strings

const allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.