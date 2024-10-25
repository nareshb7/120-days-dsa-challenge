/**
 * @param {string[]} folder
 * @return {string[]}
 */
 var removeSubfolders = function(folder) {
    // Sort the folders lexicographically so parent folders come before their subfolders
    folder.sort();
    
    // Initialize result array with the first folder
    const ans = [folder[0]];
    
    // Iterate through remaining folders starting from index 1
    for (let i = 1; i < folder.length; i++) {
        // Get the last added folder path and add a trailing slash
        const lastFolder = ans[ans.length - 1] + '/';
        
        // Check if current folder starts with lastFolder
        // If it doesn't start with lastFolder, then it's not a subfolder
        if (!folder[i].startsWith(lastFolder)) {
            ans.push(folder[i]);
        }
    }
    
    return ans;
};

// 1233. Remove Sub-Folders from the Filesystem

// Given a list of folders folder, return the folders after removing all sub-folders in those folders. 
// You may return the answer in any order.
// If a folder[i] is located within another folder[j], it is called a sub-folder of it. A sub-folder of folder[j] must 
// start with folder[j], followed by a "/". For example, "/a/b" is a sub-folder of "/a", but "/b" is not a sub-folder of "/a/b/c".
// The format of a path is one or more concatenated strings of the form: '/' followed by one or more lowercase English letters.
// For example, "/leetcode" and "/leetcode/problems" are valid paths while an empty string and "/" are not.


// Input: folder = ["/a","/a/b","/c/d","/c/d/e","/c/f"]
// Output: ["/a","/c/d","/c/f"]
// Explanation: Folders "/a/b" is a subfolder of "/a" and "/c/d/e" is inside of folder "/c/d" in our filesystem.