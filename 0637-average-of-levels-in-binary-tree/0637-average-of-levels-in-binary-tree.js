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
var averageOfLevels = function(root) {
let res =[];
    if(root === null) {
        return res
    }
    let queue = [root];
    
    while(queue.length >0) {
        const levelSize = queue.length;
        let sum=0;
        for(let i=0;i<levelSize;i++) {
            const currNode = queue.shift();
            sum += currNode.val;
            if(currNode.left !== null) {
                queue.push(currNode.left);
            }
            if(currNode.right!==null) {
                queue.push(currNode.right)
            }
        }
        res.push(sum/levelSize)
    }
    return res;
};