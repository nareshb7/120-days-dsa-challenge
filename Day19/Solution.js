/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
  const notations = ["M","CM", "D","CD", "C","XC","L","XL", "X","IX", "V","IV", "I"]
  const values = [1000, 900, 500,400, 100, 90, 50, 40, 10,9, 5,4,1]
  let roman =""
  for (let i=0; num> 0;i++){
      while (num >= values[i]) {
          roman+=notations[i]
          num-=values[i]
      }
  }
  return roman
};

const num = 3749
console.log(`Roman no of ${num} is::`, intToRoman(num))
//Output: "MMMDCCXLIX"