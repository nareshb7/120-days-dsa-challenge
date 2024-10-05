/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // if 's1' size is larger than 's2'
  if (s1.length > s2.length) return 0;

  // loop through 's1' to record the frequency and the total number of characters
  let hash = {};
  let count1 = 0;
  for (let ch of s1) {
    if (hash[ch]) {
      hash[ch]++;
    } else {
      hash[ch] = 1;
    }
    count1++;
  }

  // left and right start from the beginning
  let l = -1, r = 0;

  // create another hashmap to track character that are not in the 's1' string and 'count for their total number
  let outside = {};
  let count2 = 0;
  // start a sliding window over 's2'
  while (r < s2.length) {

    // if the character exists in the hash and has non-zero count, decrease its count and reduce count1
    let char = s2[r];
    if (hash[char] && hash[char] > 0) {
      hash[char]--;
      count1--;
    }
    // Otherwise, add it to the outside hashmap (counting characters outside s1) and increase count2
    else {
      outside[char] = (outside[char] || 0) + 1;
      count2++;
    }
    // If the window exceeds the size of s1, move the left pointer l to shrink it
    while (r - l > s1.length) {
      l++;
      let temp = s2[l];
      if (outside[temp] && outside[temp] > 0) {
        outside[temp]--;
        count2--;
      } else {
        hash[temp]++;
        count1++;
      }
    }
    // If the window size matches s1 and both count1 and count2 are zero, return true (1).
    if (r - l == s1.length) {
      if (count1 == 0 && count2 == 0) return 1;
    }
    r++;
  }
  return 0;
};

// 567. Permutation in String

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba")