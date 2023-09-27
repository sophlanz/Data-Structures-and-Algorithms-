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
    const DFS = (node)=>{
        if(!node)return 0;
        const depthLeft = 1 +DFS(node.left);
        const depthRight = 1 + DFS(node.right);
        const greatestDepth = Math.max(depthLeft,depthRight)
        return greatestDepth
    }
   return DFS(root);

};
