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
var postorderTraversal = function(root) {
    if(!root)return []
    let res=[];
    let stack1=[root];
    let stack2=[];
    while(stack1.length){
        let node = stack1.pop();
        stack2.push(node.val);
        if(node.left){
            stack1.push(node.left);
        }
        if(node.right){
            stack1.push(node.right);
        }
    }
    while(stack2.length){
        res.push(stack2.pop());
    }
    return res;
};
