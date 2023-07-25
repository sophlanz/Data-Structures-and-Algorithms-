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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let side1;
    let side2;
    let res=[];
    const DFS=(node)=>{
        if(!node) {
            res.push(null)
            return;
        };
        res.push(node.val);
        DFS(node.left)
        DFS(node.right)
        
    }
   const DFS2 = (node)=>{
        if(!node){
            res.push(null)
            return;
        };
       res.push(node.val)
       DFS2(node.right)
       DFS2(node.left)
       
    }
    DFS(root.left)
    side1=res
    res=[]
    DFS2(root.right)
    side2=res
    return side1.toString() === side2.toString()
};
                  