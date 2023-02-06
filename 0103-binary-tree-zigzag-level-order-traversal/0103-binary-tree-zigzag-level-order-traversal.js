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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    let queue = [root];
    let leftToRight = true;
    let res=[];
    while(queue.length) {
        let levelSize = queue.length;
        let levelRes = [];
        for(let i=0;i<levelSize;i++) {
            let node = queue.shift();
            if(leftToRight) levelRes.push(node.val);
            else levelRes.unshift(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    leftToRight = !leftToRight
    res.push(levelRes)
    }
    return res;
};