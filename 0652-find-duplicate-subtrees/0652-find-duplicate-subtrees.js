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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
 let idMap = {};
    let res=[]
    const DFS = (node) => {
        if(!node) return "#";
        const id = node.val +","+ DFS(node.left) +","+DFS(node.right);
        if(!idMap[id]) idMap[id] = 1;
        else {
            idMap[id]++
        }
        if(idMap[id]===2) res.push(node);
        return id;
    }
    DFS(root);
    return res;
}