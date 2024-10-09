/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var TrieNode = function () {
  this.children = new Map();
  this.endWord = false;
};

var Trie = function () {
  this.root = new TrieNode();
};

Trie.prototype.add = function (word) {
  let current = this.root;
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (!current.children.has(char)) {
      current.children.set(char, new TrieNode());
    }
    current = current.children.get(char);
  }
  current.endWord = true;
};

Trie.prototype.findWord = function (word) {
  let current = this.root;
  let s = "";
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (!current.children.has(char)) {
      break;
    }
    s += char;
    current = current.children.get(char);
    if (current.endWord) {
      return s;
    }
  }
  return word;
};

var replaceWords = function (dictionary, sentence) {
  const trie = new Trie();

  for (const word of dictionary) {
    trie.add(word);
  }

  const splitedSentences = sentence.split(" ");
  let result = [];

  for (let i = 0; i < splitedSentences.length; i++) {
    const word = splitedSentences[i];
    result.push(trie.findWord(word));
  }

  return result.join(" ");
};

const dictionary = ["cat", "bat", "rat"],
  sentence = "the cattle was rattled by the battery";
  
console.log("Relaced Word::", replaceWords(dictionary, sentence));
// - Output: "the cat was rat by the bat"
