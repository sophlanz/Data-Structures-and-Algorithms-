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
var levelOrder = function(root) {
    if(!root) return [];
    let queue = [root];
    let res=[];
    while(queue.length) {
        let levelSize = queue.length;
        let currLevel = [];
        for(let i=0;i<levelSize;i++) {
            let node = queue.shift();
            currLevel.push(node.val);
            if(node.left !== null) queue.push(node.left);
            if(node.right !== null) queue.push(node.right)
        }
        res.push(currLevel);
    }
    return res;
};