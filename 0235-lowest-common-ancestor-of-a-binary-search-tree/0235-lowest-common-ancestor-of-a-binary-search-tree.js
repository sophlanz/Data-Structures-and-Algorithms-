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
    const DFS = (node) => {
        if(!node)return null;
        if(node === p || node === q) return node;
        const left = DFS(node.left);
        const right = DFS(node.right);
        if(right && left) {
            return node;
        }else if(!left){
            return right
        }else{
            return left
        }
    }
    return DFS(root)
};