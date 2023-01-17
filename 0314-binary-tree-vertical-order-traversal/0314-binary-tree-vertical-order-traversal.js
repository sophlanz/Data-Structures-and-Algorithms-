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
    let map = {};
    while(queue.length) {
        const[node,idx] = queue.shift();
        map[idx] ? map[idx].push(node.val) : map[idx] = [node.val];
        node.left ? queue.push([node.left, idx-1]) : null;
        node.right ? queue.push([node.right, idx+1]) : null;
    }
   return Object.keys(map).sort((a,b)=> a-b).map((a)=> map[a]);
};
//BFS queue
//Time Complexity O(N)
//space complexity O(N)