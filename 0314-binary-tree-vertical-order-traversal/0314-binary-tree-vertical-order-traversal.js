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
    let queue=[[root,0]];
    let idxMap = {};
    while(queue.length){
        const [node,idx] = queue.shift();
        idxMap[idx] ?idxMap[idx].push(node.val) : idxMap[idx] = [node.val];
        if(node.left) queue.push([node.left,idx-1]);
        if(node.right)queue.push([node.right,idx+1]);
    }
    return Object.keys(idxMap).sort((a,b)=>a-b).map((a)=> idxMap[a]);
    
};