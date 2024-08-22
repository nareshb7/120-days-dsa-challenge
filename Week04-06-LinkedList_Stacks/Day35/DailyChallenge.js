var findComplement = function(num) {
    const binaryStr = num.toString(2)
    const bitLength = binaryStr.length
    const bitMask = (1 << bitLength) -1
    const complement = num ^ bitMask
    return complement
};

// 476. Number Complement
const num = 5
console.log('Complement of 5 is::', findComplement(num))
// Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.