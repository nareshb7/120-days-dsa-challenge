const postorderTraversal = (root) => {
    if (!root) return [];
    
    const result = [];
    const stack = [root];
    const outputStack = [];
    
    while (stack.length) {
        const node = stack.pop();
        outputStack.push(node.val);
        
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    
    while (outputStack.length) {
        result.push(outputStack.pop());
    }
    
    return result;
};

// 145. Binary Tree Postorder Traversal
// Input: root = [1,null,2,3]
// Output: [3,2,1]