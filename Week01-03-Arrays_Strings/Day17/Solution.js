/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack =[]
    const map ={
        "(": ")",
        "{":"}",
        "[": "]"
    }
    for (let char of s) {
        if (map[char]) {
            stack.push(char)
        } else {
            const topEl= stack.pop()
            if (map[topEl] !== char) {
                return false
            }
        }
    }
    return stack.length === 0
};

const s = "()[]{}"
console.log("Is Valid Parentheses::", isValid(s)) // Output: true