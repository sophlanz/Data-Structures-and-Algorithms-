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
  if(root === null) {
      return 0
  }
    let queue = [root];
    let maxDepth =0
    while(queue.length >0) {
        const levelSize = queue.length;
        maxDepth++
        for(let i=0;i<levelSize;i++) {
            const curr = queue.shift();
            if(curr.left !== null) {
                queue.push(curr.left)
            }
            if(curr.right !== null) {
                queue.push(curr.right)
            }
        }
    }
    return maxDepth
};