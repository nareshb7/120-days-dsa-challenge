/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const partitions = [];
  const lastOccurrence = new Array(26).fill(0);

  // Store the last occurrence of each character
  for (let i = 0; i < s.length; i++) {
    lastOccurrence[s.charCodeAt(i) - "a".charCodeAt(0)] = i;
  }

  let start = 0, end = 0;

  // Iterate through the string and determine partitions
  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, lastOccurrence[s.charCodeAt(i) - "a".charCodeAt(0)]);
    if (i === end) {
      partitions.push(end - start + 1);
      start = i + 1;
    }
  }

  return partitions;
};

const s = "ababcbacadefegdehijhklij";
console.log("Partitions::", partitionLabels(s));
// Output: [9,7,8]

//  var partitionLabels = function(s) {

//   const partitions =[];

//   for (let i=0; i< s.length;) {
//       let start = i;
//       let end = s.lastIndexOf(s[i])
//       for (let j=start+1; j<end-1; j++) {
//           const curr = s.lastIndexOf(s[j])
//           if (curr > end) {
//               end = curr
//           }
//       }
//       i = end+1
//       partitions.push(end-start+1)
//   }
//   return partitions
// };
