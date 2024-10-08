# Notes for Day 82: Replace Words

## Approach

- `Create a Trie:` A Trie is a tree-like structure that stores words character by character. Each node represents a character, and by traversing from the root of the Trie, you can form a word.
- `Insert dictionary words into the Trie:` For each word (root) in the dictionary, we insert it into the Trie character by character.
  Mark the end of the word in the Trie so we know where a root word ends.
- `Search for the shortest root for each word in the sentence:` - `For each word in the sentence:`
  Traverse the Trie to check if any root in the dictionary is a prefix of the word Stop searching when you find a root (since we need the shortest root).
  If no root is found, keep the word as it is.
- `Rebuild the sentence:` After finding the replacement (or keeping the word unchanged), build the sentence by combining all the modified words

## Complexity

- `Time Complexity:`

- Building the Trie: For each word in the dictionary, we insert it into the Trie.
  Let L be the average length of words in the dictionary and D be the number of words in the dictionary.
  Inserting each word takes O(L) time.
  So, the total time for building the Trie is `O(D * L).`
- Processing the Sentence: For each word in the sentence, we search for the shortest prefix in the Trie.
  Let W be the number of words in the sentence and L be the average length of each word.
  Searching for a prefix in the Trie takes at most O(L) time.
  So, the total time for processing the sentence is O(W \* L).
- Overall Time Complexity: Combining both, the` overall time complexity is O(D * L + W * L)`.

- `Space Complexity:`
- Trie Storage: Each node in the Trie corresponds to a character in the dictionary.
  In the worst case, for D words with average length L, we store all the characters in the Trie.
  The space complexity for storing the Trie is` O(D * L).`
- Sentence Storage: The space needed to store the sentence is O(W \* L), where W is the number of words and L is the average length of a word.
- Overall Space Complexity: The `total space complexity is O(D * L + W * L)`

## Key Learnings:

- `Trie Data Structure:` A Trie (Prefix Tree) is highly efficient for searching and matching prefixes of words.
  It's especially useful for problems involving dictionary lookups, autocomplete, and word searches.
- `Efficient Prefix Search:` By storing words in a Trie, we can quickly find the shortest prefix of a word in O(L) time, where L is the length of the word.
  This is much faster compared to comparing the word with every dictionary word.
- `Modular Solution:` The problem is broken down into two parts:
  Building the Trie from the dictionary.
  Searching for replacements in the sentence using the Trie.
- `Optimal for Large Data:` The approach scales well when dealing with a large dictionary and long sentences, as it avoids repeated checks for each word in the dictionary.
  Instead, we perform a single Trie traversal to find the shortest prefix for each word in the sentence.
- `Trade-off between Time and Space:` The Trie uses extra space to store the words, but it significantly improves the time efficiency of prefix searches.
