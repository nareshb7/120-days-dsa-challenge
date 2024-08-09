var kthDistinct = function(arr, k) {
    const distinct = new Set();
    const seen = new Set();
    
    for (const str of arr) {
        if (seen.has(str)) {
            distinct.delete(str);
        } else {
            distinct.add(str);
            seen.add(str);
        }
    }
    
    for (const str of arr) {
        if (distinct.has(str) && --k === 0) {
            return str;
        }
    }
    return "";
};
//2053. Kth Distinct String in an Array
const arr = ["d","b","c","b","c","a"], k = 2
console.log("Kth distinct value is ::", kthDistinct(arr, k))
// Output: "a"
// Explanation:
// The only distinct strings in arr are "d" and "a".
// "d" appears 1st, so it is the 1st distinct string.
// "a" appears 2nd, so it is the 2nd distinct string.
// Since k == 2, "a" is returned.