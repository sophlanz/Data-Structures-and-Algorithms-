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
var diameterOfBinaryTree = function(root) {
    let max=0;
    const DFS = (node) => {
    if(!node)return 0;
    const left = node.left ? 1 + DFS(node.left) : 0 ;
    const right = node.right ? 1 + DFS(node.right): 0;
    const maxDepth = left + right;
    max = Math.max(maxDepth,max)
    return Math.max(left,right)
        
    }
DFS(root);
    return max
};