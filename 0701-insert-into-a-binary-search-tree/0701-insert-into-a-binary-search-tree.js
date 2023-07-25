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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(!root)return new TreeNode(val);
    let curr=root;
    let parent
    while(curr){
        parent = curr
        if(curr.val >val){
            curr=curr.left
        }else{
            curr=curr.right
        }
    }
    console.log(parent)
    let newNode = new TreeNode(val,null,null);
    if(parent.val > val){
        parent.left=newNode

        
    }else{
        parent.right=newNode

    }
    return root
    
};