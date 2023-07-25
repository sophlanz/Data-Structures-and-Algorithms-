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
 * @return {number}
 */
var maxDepth = function(root) {
if(!root)return 0
    let queue = [root];
     let maxDepth = 0
    while(queue.length) {
        const levelSize =  queue.length;
       maxDepth++
        for(let i=0;i<levelSize;i++) {
            const currNode = queue.shift();
            if(currNode.left) {
                queue.push(currNode.left)
            }
            if(currNode.right) {
                queue.push(currNode.right)
            }
        }
    }
    return maxDepth
};