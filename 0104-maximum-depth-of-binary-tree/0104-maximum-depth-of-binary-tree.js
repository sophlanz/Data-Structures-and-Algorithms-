/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let maxPath=0;
    const DFS= (node) => {
        if(!node)return 0;
       let left = DFS(node.left) + 1;
       let right = DFS(node.right) + 1;
       let max = Math.max(left,right);
        maxPath=Math.max(maxPath,max)
        return max;
    }
    DFS(root);
    return maxPath
};