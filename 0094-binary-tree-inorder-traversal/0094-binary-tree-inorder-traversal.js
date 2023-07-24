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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let stack=[];
    let res=[];
    let curr=root;
    while(curr !== null || stack.length){
        if(curr){
            stack.push(curr);
            curr = curr.left;
        }else{
            curr = stack.pop();
            res.push(curr.val);
            curr = curr.right
        }
    }
    return res
};
