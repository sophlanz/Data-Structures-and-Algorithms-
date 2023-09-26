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
var levelOrder = function(root) {
    if(!root)return []
    let queue=[root];
    let res=[];
    while(queue.length){
        const levelSize = queue.length;
        let resLevel=[];
        for(let i=0;i<levelSize;i++){
            const node = queue.shift();
            resLevel.push(node.val);
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        res.push(resLevel);
    }
    return res;
};