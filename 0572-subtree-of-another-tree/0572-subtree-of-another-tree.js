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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    let first=new Set([]);
    let queue=[root];
    if(root.val == subRoot.val)first.add(root)
    while(queue.length){
        let levelSize = queue.length;
        for(let i=0;i<levelSize;i++){
            let node = queue.shift();
            if(node.val === subRoot.val){
                first.add(node);
            }
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right)
            }
        }
    }
    if(!first.size)return false
   const isSameTree = (tree1,tree2)=>{
      if(!tree1 && !tree2)return true;
       if(!tree1 || !tree2) return false;
       if(tree1.val !== tree2.val)return false;
      return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right,tree2.right);
   }
   for(const tree of first){
       if(isSameTree(tree,subRoot)){
           return true
       }
   }
    return false

};