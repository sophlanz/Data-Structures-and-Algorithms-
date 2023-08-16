/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let sameTree=true
    const DFS = (node1,node2)=>{
        if(!node1 && !node2)return null;
        if(!node1 || ! node2){
            sameTree=false
            return
        }
        
        if(node1.val !== node2.val) {
            sameTree=false
            return
        }
        let left = DFS(node1.left,node2.left);
        let right = DFS(node1.right,node2.right);

    }
     DFS(p,q)
    return sameTree
};