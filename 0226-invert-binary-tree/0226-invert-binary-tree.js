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
        if(!node)return;
        let left=node.left;
        let right=node.right;
        node.right=left;
        node.left=right;
        DFS(node.left);
        DFS(node.right)
    }
    DFS(root);
    return root
};