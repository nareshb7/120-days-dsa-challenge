# Notes for Day 81: Design Add and Search Words Data Structure

## Approach

- `1. Data Structure (Trie) Setup:` Use a Trie (Prefix Tree) to store words.
  Each node in the Trie is a dictionary that holds characters as keys and points to the next node (next character).
  The final node for a word has a special marker (like end = true) to indicate that it's the end of a valid word.
- `2. addWord Operation:` Start from the root of the Trie.
  For each character in the word:
  If the character doesn't exist in the current node, create a new node (empty dictionary).
  Move to the next node (character).
  After processing all characters, mark the last node as the end of the word by setting end = true.
- `3. search Operation:` This function searches for a word in the Trie.
  The word can include . as a wildcard character, which can match any letter.
- `4. Handling the . Character:` When you encounter a ., you need to check all possible children of the current node because . can match any letter.
  Recursively search through each child node for the remaining part of the word.
- `5. Recursive Search (Helper Function):` Start at the root and process the word one character at a time.
  If the character is a regular letter, follow the path in the Trie.
  If it's a ., recursively explore all possible paths (child nodes).
  When you reach the last character:
  If it's a regular letter, check if it’s the end of a valid word.
  If it's a ., check if any of the children lead to a valid word.
- `6. Return the Result:` If you find a path that matches the word (accounting for . as well), return true.
  If no valid path is found, return false.

## Complexity

- `addWord(word):`
  `Time Complexity:` O(N), where N is the length of the word. You have to process each character once, and adding it to the Trie takes constant time for each character.
  `Space Complexity:` O(N), because in the worst case, you are adding a new branch for each character in the word, creating new Trie nodes.

- `search(word):`
  `Time Complexity:`
  Best case: O(N), where N is the length of the word, if there are no . wildcards. You simply follow the path in the Trie.
  Worst case (when . is present): O(26^N), where N is the length of the word, and 26 represents the letters in the alphabet. For each . in the word, you may have to check all 26 possible child nodes.
  `Space Complexity:` O(1) in terms of extra space, as we are only using the existing Trie nodes and performing a constant amount of work for each search step

## Key Learnings:

- `Trie Data Structure:` A Trie (Prefix Tree) is very efficient for problems involving word storage and search, especially when there are multiple words with shared prefixes.
  It provides fast insertion and search times, making it ideal for dictionary-like problems.
- `Handling Wildcards (.):` When you encounter special characters like . that can match any letter, a recursive or backtracking approach is needed to explore all possible paths in the Trie.
  This increases the complexity, but it ensures flexibility in searching patterns.
- `Recursion:` The use of recursion in the searchHelper function allows us to explore all possible paths when encountering ..
  Backtracking helps in returning from incorrect paths while continuing the search for valid ones.
- `Efficiency:` Insertion (addWord) is efficient, operating in linear time with respect to the word's length.
  Search can be very efficient when there are no wildcards, but can become expensive when many . characters are present due to the need to explore multiple paths.
- `End Markers:` Marking the end of a word (with end = true) ensures that words of different lengths but with the same prefix (e.g., "app" and "apple") can be correctly distinguished
