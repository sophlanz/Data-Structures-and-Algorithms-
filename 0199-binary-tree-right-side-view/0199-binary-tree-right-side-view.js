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
var rightSideView = function(root) {
    if(!root) return [];
    let res=[];
let queue = [root];
    while(queue.length) {
        let levelSize = queue.length;
        for(let i=0;i<levelSize;i++) {
            let node = queue.shift();
            if(i===0) {
                res.push(node.val);
                console.log(res)
            }
            if(node.right)queue.push(node.right);
            if(node.left) queue.push(node.left);
        }
    }
    return res
};