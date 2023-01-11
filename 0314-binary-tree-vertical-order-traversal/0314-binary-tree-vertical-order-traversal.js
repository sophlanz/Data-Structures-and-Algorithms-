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
    let queue = [[root,0]];
    let map={};
    while(queue.length >0) {
        const [node,i] = queue.shift();
             map[i] === undefined?  map[i]=[node.val] : map[i].push(node.val);
        node.left ? queue.push([node.left,i-1]) : null;
        node.right? queue.push([node.right,i+1]) : null;
    }
    return Object.keys(map).sort((a,b)=> a-b).map(a=> map[a])
    
};
               