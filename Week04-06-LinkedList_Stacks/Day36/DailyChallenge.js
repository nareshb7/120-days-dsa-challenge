/**
 * @param {string} expression
 * @return {string}
 */
 var fractionAddition = function(expression) {
    const fractions = expression.match(/[+-]?\d+\/\d+/g);
    let numerator = 0, denominator = 1;

    for (const frac of fractions) {
        let [num, denom] = frac.split('/').map(Number);
        numerator = numerator * denom + num * denominator;
        denominator *= denom;
        const gcd = GCD(Math.abs(numerator), denominator);
        numerator /= gcd;
        denominator /= gcd;
    }

    return `${numerator}/${denominator}`;
};
function GCD(a, b) {
    return b === 0 ? a : GCD(b, a % b);
}
// 592. Fraction Addition and Subtraction
const expression = "-1/2+1/2+1/3"
console.log('Fraction result is::', fractionAddition(expression))
// Output: "1/3"