/**
 * @param {string} word
 * @return {number}
 */
 var minimumPushes = function(word) {
    const letterFreq = new Array(26).fill(0);
    for (let c of word) {
        letterFreq[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    letterFreq.sort((a, b) => b - a);
    
    let totalPresses = 0;
    for (let i = 0; i < 26; i++) {
        if (letterFreq[i] === 0) break;
        totalPresses += Math.floor(i / 8 + 1) * letterFreq[i];
    }
    
    return totalPresses;
};
//3016. Minimum Number of Pushes to Type Word II
const word = "abcde"
console.log("Kth distinct value is ::", minimumPushes(word))
// Output: 5
// Explanation: The remapped keypad given in the image provides the minimum cost.
// "a" -> one push on key 2
// "b" -> one push on key 3
// "c" -> one push on key 4
// "d" -> one push on key 5
// "e" -> one push on key 6
// Total cost is 1 + 1 + 1 + 1 + 1 = 5.
// It can be shown that no other mapping can provide a lower cost.