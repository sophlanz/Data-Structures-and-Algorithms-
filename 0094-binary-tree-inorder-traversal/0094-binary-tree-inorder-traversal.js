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
    let res=[];
    let stack=[];
    let curr=root;
    while(curr || stack.length){
        if(curr){
          stack.push(curr);
          curr=curr.left
        }else{
            let node=stack.pop();
            res.push(node.val);
            curr=node.right
        }
    }
    return res;
};