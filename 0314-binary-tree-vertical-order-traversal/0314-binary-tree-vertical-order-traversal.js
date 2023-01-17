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
    let map = {};
    let queue = [[root,0]];
    while(queue.length) {
        const [node,index] = queue.shift();
        map[index] ? map[index].push(node.val) : map[index] = [node.val];
       
          node.left ? queue.push([node.left,index-1 ]) : null;
        
       
           node.right? queue.push([node.right,index+1]) : null;
        
    }
    return Object.keys(map).sort((a,b)=> a-b).map((a)=> map[a]);
};