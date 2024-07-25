/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function(haystack, needle) {
  if(haystack.length === 0) return 0
  const nLen =  needle.length
  const len = haystack.length - nLen +1
  for (let i=0; i<len ; i++) {
          let j=0
          for (; j<nLen; j++) {
              if (haystack[i+j] !== needle[j]){
                  break;
              } 
          }
          if (j === nLen) {
                  return i
          } 
  }
  return -1
};


const haystack = "hello";
const needle = 'll'
console.log("strStr():: ", strStr(haystack, needle))