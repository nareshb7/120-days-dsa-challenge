# Notes for Day 75: Word Break

## Approach

- `Dynamic Programming (DP) Initialization:` Create a dp array of size s.length + 1 where each value is initially set to false.
  Set dp[0] to true, meaning an empty string can always be segmented.
- `Iterate Through the String:` For each index i from 1 to the length of the string s, check if the substring s.substring(start, i) matches any word in wordDict.
  start is calculated as i - w.length where w is a word from wordDict.
- `Check if Substring Matches a Word:` If the substring s.substring(start, i) matches a word in wordDict and the part of the string before start (dp[start]) can be segmented (true), set dp[i] = true.
  Break out of the loop to move to the next index i once a valid segmentation is found.
- `Return Result:` After processing all characters, return dp[s.length], which will be true if the entire string can be segmented using words from wordDict

## Complexity

- `Time Complexity:` Outer Loop: Iterates through each index of the string s → O(n), where n is the length of s.
  Inner Loop: Iterates through each word in wordDict for each character in s → O(m), where m is the number of words in wordDict.
  Substring Check: For each word, checking the substring takes O(k) time, where k is the average length of the words in wordDict.
  Thus, the overall time complexity is O(n _ m _ k).
- `Space Complexity:` DP Array: The size of the dp array is s.length + 1 → O(n).
  So, the overall space complexity is O(n)

## Key Learnings:

- `Dynamic Programming:` You use a dp array to store whether the substring s[0:i] can be segmented using the dictionary.
- `Substring Matching:` For each index i, you check if any word in wordDict matches a valid substring ending at i.
- `Efficiency:` The solution is efficient for moderate-sized strings and dictionaries but can become slower for larger inputs due to nested loops.
- `Greedy Breaking:` Once you find a valid word match at a given index, you stop checking further words for that index.
- `Space Optimization:` The algorithm uses only linear extra space (dp array) relative to the input string length.
