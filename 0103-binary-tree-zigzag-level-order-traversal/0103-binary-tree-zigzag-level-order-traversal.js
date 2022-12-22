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
    if(root===null ) {
        return res;
    }
    let queue = [root];
    let leftToRight = true;
    while(queue.length >0) {
        const levelSize = queue.length;
        let currLevel = [];
        for(let i=0;i<levelSize;i++) {
            const currNode = queue.shift();
            if(leftToRight) {
                currLevel.push(currNode.val);
            }else {
                currLevel.unshift(currNode.val)
            }
            if(currNode.left !== null) {
                queue.push(currNode.left)
            }
            if(currNode.right !== null) {
                queue.push(currNode.right)
            }
        }
        res.push(currLevel)
        leftToRight = !leftToRight
    }
    return res;
};