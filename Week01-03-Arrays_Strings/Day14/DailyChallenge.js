/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  return details.reduce((count, info) => {
    const tens = info[11];
    const ones = info[12];
    return count + (tens > "6" || (tens === "6" && ones > "0") ? 1 : 0);
  }, 0);
  // let count = 0
  // for (let i=0; i< details.length; i++) {
  //   const tens = details[i][11]
  //   const ones = details[i][12]
  //   if (tens > "6" || (tens=== "6" && ones > "0")) {
  //       count++
  //   }
  // }
  //   return count
};

// 2678. Number of Senior Citizens
const details = ["7868190130M7522", "5303914400F9211", "9273338290F4010"]; // 1-10 phno, 11-gender 12-13-age, 14-15- seat no
// return more than 60 aged persed persons count
//Output: 2
//Explanation: The passengers at indices 0, 1, and 2 have ages 75, 92, and 40. Thus, there are 2 people who are over 60 years old.
console.log("Count Seniors:: ", countSeniors(details));
