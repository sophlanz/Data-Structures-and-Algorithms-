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
 let res =[];
    if(root === null) {
        return res
    }
    let queue = [root]
    let leftToRight= true
    while(queue.length>0) {
        const levelSize = queue.length;
        let currLevel =[];
        for(let i=0;i<levelSize;i++) {
            const curr = queue.shift();
            if(leftToRight) {
                currLevel.push(curr.val)
            }else {
                currLevel.unshift(curr.val)
            }
            if(curr.left !== null) {
                queue.push(curr.left)
            }
            if(curr.right !== null) {
                queue.push(curr.right)
            }
        }
        res.push(currLevel)
        leftToRight = !leftToRight;
    }
    return res
};