# Day 27: Simplify Path

## Problem Statement
- Given an absolute path for a Unix-style file system, which begins with a slash '/', transform this path into its simplified canonical path.
- The simplified canonical path should adhere to the following rules:
- It must start with a single slash '/'.
- Directories within the path should be separated by only one slash '/'.
- It should not end with a slash '/', unless it's the root directory.
- It should exclude any single or double periods used to denote current or parent directories.
- Return the new path.

## Example

1. **Example 1:**
- Input: path = "/home//foo/"
- Output: "/home/foo"
- Explanation: Multiple consecutive slashes are replaced by a single one.

2. **Example 2:**
- Input: path = "/home/"
- Output: "/home"
- Explanation: The trailing slash should be removed.

3. **Example 3:**
- Input: path = "/home/user/Documents/../Pictures"
- Output: "/home/user/Pictures"
- Explanation: A double period ".." refers to the directory up a level.

4. **Example 4:**
- Input: path = "/../"
- Output: "/"
- Explanation: Going one level up from the root directory is not possible.

5. **Example 5:**
- Input: path = "/.../a/../b/c/../d/./"
- Output: "/.../b/d"
- Explanation: "..." is a valid name for a directory in this problem


# Daily Challenge - 719. Find K-th Smallest Pair Distance
