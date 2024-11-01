/**
 * @param {string} s
 * @return {string}
 */
 var makeFancyString = function(s) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
        let n = result.length;
        if (n < 2 || !(result[n - 1] === s[i] && result[n - 2] === s[i])) {
            result += s[i];
        }
    }
    return result;
};

// 1957. Delete Characters to Make Fancy String


// A fancy string is a string where no three consecutive characters are equal.
// Given a string s, delete the minimum possible number of characters from s to make it fancy.
// Return the final string after the deletion. It can be shown that the answer will always be unique.

// Example:
// Input: s = "leeetcode"
// Output: "leetcode"
// Explanation:
// Remove an 'e' from the first group of 'e's to create "leetcode".
// No three consecutive characters are equal, so return "leetcode"