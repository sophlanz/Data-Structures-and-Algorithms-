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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let isBalanced=true;
    if(!root)return true
    const DFS = (node)=>{
        if(!node)return 0;
        let left = DFS(node.left);
        let right = DFS(node.right);
        if(Math.abs(left-right)>1)isBalanced=false
        else{
                   
       return 1+Math.max(left,right)
        }
 
    }
    DFS(root)
    return isBalanced
}; 



