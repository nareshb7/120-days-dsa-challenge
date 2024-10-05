# Notes for Day 79: Implement Trie (Prefix Tree)

## Approach

- `TrieNode Structure: `
- `A TrieNode contains:  `
  children: An object to store its child nodes.
  endOfWord: A boolean indicating if the current node represents the end of a word.
- `Trie Structure: `: The Trie has a root node initialized as a new TrieNode.
- `Insert Operation: `: Start at the root node.
- `For each character in the word: `
  If the character is not already in the current node's children, create a new TrieNode for it.
  Move to the child node (i.e., the newly created node or the existing one).
  After processing all characters, mark the last node's endOfWord as true to indicate the end of the word.
- `Search Operation: `: Start at the root node.
- `For each character in the word: `
  If the character is not found in the current node's children, return false (word doesn't exist).
  Move to the corresponding child node.
  After processing all characters, check if the endOfWord is true (return true if the word exists, otherwise false).
- `StartsWith Operation: `: Start at the root node.
- `For each character in the prefix: `
  If the character is not found in the current node's children, return false (prefix doesn't exist).
  Move to the corresponding child node.
  If all characters of the prefix are found, return true (prefix exists in the Trie).

## Complexity

- `Time Complexity:`
  insert(word) -> O(n), where n is the length of the word.
  search(word) -> O(n), where n is the length of the word.
  startsWith(prefix) -> O(n), where n is the length of the prefix.
- `Space Complexity:`
  insert(word) -> O(n), where n is the length of the word (in the worst case, new nodes are created).
  search(word) -> O(1), as no extra space is used beyond input.
  startsWith(prefix) -> O(1), as no extra space is used beyond input

## Key Learnings:

- `Efficient Prefix Matching:` Tries are highly efficient for searching words and prefixes, making them useful in autocomplete systems and dictionary searches.
- `Character by Character Search:` Operations (insert, search, startsWith) involve processing one character at a time, following paths in the Trie.
- `Dynamic Node Creation:` Nodes are dynamically created as needed during insertion, avoiding unnecessary storage for characters that aren't used.
- `Search is Optimized:` Trie search operations avoid scanning entire words if a mismatch is found early, which speeds up search compared to brute-force methods.
- `Space Trade-off:` Tries trade time efficiency for space, as they can consume more memory compared to other data structures, especially when storing a large number of words
