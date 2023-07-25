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
    let stack = [root];
    while(stack.length) {
        let node = stack.pop();
        if(node) {
            [node.left,node.right] = [node.right,node.left];
            stack.push(node.left,node.right);
        }
    }
    return root
};