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
    let tempLeft = node.left;
    node.left=node.right;
    node.right=tempLeft;
    DFS(node.left);
    DFS(node.right)
}
    DFS(root);
    return root
};