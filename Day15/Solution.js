/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    //Step 1 remove whitespaces
    s = s.trim()
    // Step 2 elimination
    if(!s.length) {
        return 0
    }
    //Step 3 Determine the sign
    let sign = 1, start =0
    if (s[0] === "-") {
        start =1
        sign =-1
    } else if (s[0] === "+") {
        start = 1
        sign = 1
    }
    //Step4 - Conversion
    let result =0
    for (let i = start; i< s.length ; i++) {
        if (s[i] <"0" || s[i] > "9") {
            break;
        }
        result = result * 10 + (s[i] - "0")
        //Step 5 - handle the overflow
        if (result * sign >= 2147483647) return 2147483647
        else if (result * sign <= -2147483648) return -2147483648
    }
    return result * sign
};

const s = "   -042"
console.log("String to interger::", myAtoi(s))