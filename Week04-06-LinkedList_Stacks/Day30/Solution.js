/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  const operators = {
    "+": (b, a) => a + b,
    "-": (b, a) => a - b,
    "*": (b, a) => a * b,
    "/": (b, a) => Math.trunc(a / b), // Use Math.trunc for integer division
  };

  for (const token of tokens) {
    if (operators[token]) {
      stack.push(operators[token](stack.pop(), stack.pop()));
    } else {
      stack.push(Number(token));
    }
  }

  return stack.pop();
};

const tokens = ["2", "1", "+", "3", "*"];
console.log("RPN is::", evalRPN(tokens)); //Output: 9
