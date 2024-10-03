/**
 * @param {string} s
 * @return {string}
 */
// var frequencySort = function (s) {
//   const freq = new Map();
//   for (const ch of s) {
//     freq.set(ch, (freq.get(ch) || 0) + 1);
//   }

//   const maxFreq = Math.max(...freq.values());
//   const buckets = Array.from({ length: maxFreq + 1 }, () => []);
  
//   for (const [char, count] of freq.entries()) {
//     buckets[count].push(char);
//   }

//   let str = "";
//   for (let i = buckets.length - 1; i > 0; i--) {
//     const charArr = buckets[i];
//     for (const x of charArr) {
//       str += x.repeat(i);
//     }
//   }
//   return str;
// };

var frequencySort = function(s) {
  // Step 1: Build frequency map
  const freq = new Map();
  for (const ch of s) {
      freq.set(ch, (freq.get(ch) || 0) + 1);
  }

  // Step 2: Create a max heap based on frequency
  const maxHeap = [];
  for (const [char, count] of freq.entries()) {
      maxHeap.push([char, count]);
  }
  
  maxHeap.sort((a, b) => b[1] - a[1]);  // Sort by frequency

  // Step 3: Construct the result string
  let str = '';
  for (const [char, count] of maxHeap) {
      str += char.repeat(count);
  }

  return str;
};

const s = "tree";
console.log("Sorted Str::", frequencySort(s));
// Output: "eert"

// for (const ch of s) {
//     if (freq.has(ch)) {
//         freq.set(ch, freq.get(ch)+1)
//     } else {
//         freq.set(ch, 1)
//     }
// }
// const arr = Array.from(freq.entries()).sort((a,b) => b[1]- a[1])
// let str =""
// for (const [char,count] of arr) {
//     str+=char.repeat(count)
// }
// return str
