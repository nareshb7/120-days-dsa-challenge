/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let curr = 0;
  let op = "+";
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c >= "0" && c <= "9") {
      curr = curr * 10 + (c - "0");
    }
    if (((c < "0" || c > "9") && c !== " ") || i === s.length - 1) {
      if (op === "+") {
        stack.push(curr);
      } else if (op === "-") {
        stack.push(-curr);
      } else if (op == "*") {
        const val = stack.pop() * curr;
        stack.push(val);
      } else if (op === "/") {
        const val = Math.trunc(stack.pop() / curr);
        stack.push(val);
      }
      op = c;
      curr = 0;
    }
  }
  return stack.reduce((acc, num) => acc + num, 0);
};

const s = "3+4+4*4/4"; // output = 11
console.log("Result::", calculate(s));
