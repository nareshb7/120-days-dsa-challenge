/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
 var missingRolls = function(rolls, mean, n) {
    const arr = new Array(n).fill(1)
    let sum = n
    for (const x of rolls) {
        sum+=x
    }
    let diff = (mean* (rolls.length +n ))- sum
    if (diff > n*5 || diff <0) return []
    let i=0
    while (diff > 0) {
        if (diff >= 6 - arr[i]) {
            diff-= 6 - arr[i]
            arr[i] = 6
            i++
        } else {
            arr[i]+= diff
            diff =0
        }
    }
    return arr
};

// 2028. Find Missing Observations

const rolls = [3,2,4,3], mean = 4, n = 2
console.log('Missing Rolls::', missingRolls(rolls, mean, n))
// Output: [6,6]
// Explanation: The mean of all n + m rolls is (3 + 2 + 4 + 3 + 6 + 6) / 6 = 4.