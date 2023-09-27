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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    const DFS = (node)=>{
        if(!node)return null;
        const left = DFS(node.right);
        const right = DFS(node.left);
        node.left = left;
        node.right=right
        return node;
    }
    return DFS(root)
};