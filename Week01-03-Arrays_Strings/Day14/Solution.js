/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const groupAnagrams =(strs) => {
    const hashMap =new Map()
    for (const str of strs) {
        const sortedStr = str.split("").sort().join("")
        if(!hashMap.has(sortedStr)) {
            hashMap.set(sortedStr, [])
        }
        hashMap.get(sortedStr).push(str)
    }
    return Array.from(hashMap.values())
}

const strs = ["eat","tea","tan","ate","nat","bat"]
//Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log("Group of Anagrams:::", groupAnagrams(strs))