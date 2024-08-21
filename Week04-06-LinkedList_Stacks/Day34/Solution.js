/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  for (const x of s) {
    if (x != "]") {
      stack.push(x);
      continue;
    }
    let subStr = "";
    while (stack[stack.length - 1] !== "[") {
      // checking the last element !== [
      subStr = stack.pop() + subStr;
    }
    stack.pop(); // pop the square bracket
    let multiplier = "";
    while (!Number.isNaN(Number(stack[stack.length - 1]))) {
      // checking the value is the number or not
      multiplier = stack.pop() + multiplier;
    }
    const val = subStr.repeat(Number(multiplier));
    stack.push(val);
  }
  return stack.join("");
};

const s = "3[a2[c]]" // Output: "accaccacc"
console.log("Decoded string::", decodeString(s))
