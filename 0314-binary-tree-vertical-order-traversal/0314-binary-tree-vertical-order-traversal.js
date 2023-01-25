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
    let queue = [[0,root]],
    idxMap={};
    while(queue.length) {
        let [i,node] = queue.shift();
        idxMap[i] ? idxMap[i].push(node.val) : idxMap[i] = [node.val];
        node.left ? queue.push([i-1,node.left]) : null;
        node.right ? queue.push([i+1,node.right]) : null;
    }
    return Object.keys(idxMap).sort((a,b)=> a-b).map((a)=> idxMap[a])
};