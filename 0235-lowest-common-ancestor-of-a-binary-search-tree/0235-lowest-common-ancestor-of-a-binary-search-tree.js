/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const DFS = (node)=>{
        if(!node)return null;
        if(node === p || node ===q)return node
        const left = node.left ? DFS(node.left): null;
        const right = node.right? DFS(node.right): null;
        if(!right && !left)return null
        if(!right)return left;
        if(!left)return right
        return node
    }
  return DFS(root)
};