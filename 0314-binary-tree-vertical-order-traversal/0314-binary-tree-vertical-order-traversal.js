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
var verticalOrder = function(root) {
    if(!root) return [];
    let queue = [[0,root]];
    let idxMap = {}  
    while(queue.length) {
        const [idx, node] = queue.shift();
        idxMap[idx] ? idxMap[idx].push(node.val) : idxMap[idx] = [node.val];
        node.left ? queue.push([idx-1, node.left]) : null;
        node.right ? queue.push([idx+1, node.right]):null;
    };
  return  Object.keys(idxMap).sort((a,b)=> a-b).map((a)=> idxMap[a]);
};