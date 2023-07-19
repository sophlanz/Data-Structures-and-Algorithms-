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
    if(!root) return null;
    if(root === p || root == q)return root
    const left = lowestCommonAncestor(root.left,p,q); 
    const right = lowestCommonAncestor(root.right,p,q);
   if(right && left){
       return root
   }else if(!right){
       return left
   }else if(!root & !right){
       return null
   }else{
       return right
   }
};