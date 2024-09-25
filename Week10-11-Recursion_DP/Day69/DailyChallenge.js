var sumPrefixScores = function (words) {
    const trie = {}
    for (let word of words) {
        let node = trie
        for (let char of word) {
            if (!node[char]) {
                node[char] = {}
            }
            node = node[char]
            node.count = (node.count || 0) + 1
        }
    }

    const ans = []
    for (let word of words) {
        let node = trie
        let count = 0
        for (let char of word) {
            node = node[char]
            count += node.count
        }
        ans.push(count)
    }
    
    return ans
}
// 2416. Sum of Prefix Scores of Strings
const words = ["abc","ab","bc","b"]
console.log("Sum Prefix scores::", sumPrefixScores(words))
// Output: [5,4,3,2]
// Explanation: The answer for each string is the following:
// - "abc" has 3 prefixes: "a", "ab", and "abc".
// - There are 2 strings with the prefix "a", 2 strings with the prefix "ab", and 1 string with the prefix "abc".
// The total is answer[0] = 2 + 2 + 1 = 5.
// - "ab" has 2 prefixes: "a" and "ab".
// - There are 2 strings with the prefix "a", and 2 strings with the prefix "ab".
// The total is answer[1] = 2 + 2 = 4.
// - "bc" has 2 prefixes: "b" and "bc".
// - There are 2 strings with the prefix "b", and 1 string with the prefix "bc".
// The total is answer[2] = 2 + 1 = 3.
// - "b" has 1 prefix: "b".
// - There are 2 strings with the prefix "b".
// The total is answer[3] = 2.