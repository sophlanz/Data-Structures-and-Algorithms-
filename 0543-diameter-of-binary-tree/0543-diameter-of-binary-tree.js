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
var diameterOfBinaryTree = function(root) {
    //calculating the max path for each node
    let max=0
  const DFS = (node)=>{
      if(!node)return 0;
      let left=DFS(node.left);              //# of edges to left
      let right=DFS(node.right);            //# of edges to right
       max = Math.max(max, left + right)    // path size
     return Math.max(left, right) + 1       //# of edges between current node and bottom of tree
  }
DFS(root);
return max
};
