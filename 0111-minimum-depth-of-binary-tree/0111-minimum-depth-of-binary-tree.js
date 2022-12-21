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
var minDepth = function(root) {
if (root === null) {
    return 0;
}
    let queue = [root]
    let minDepth = 0;
    while(queue.length >0) {
        const levelSize = queue.length;
        minDepth++
        for(let i=0;i<levelSize;i++) {
            let curr = queue.shift()
            if(curr.left === null && curr.right === null) {
                return minDepth
            }
            if(curr.left !== null){
                queue.push(curr.left)
            }
            if(curr.right !== null) {
                queue.push(curr.right)
            }
        }
    }
};