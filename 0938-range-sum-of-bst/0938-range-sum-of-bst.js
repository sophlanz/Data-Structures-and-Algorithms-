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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum=0;
    let queue=[root];
    while(queue.length){
        let node = queue.shift();
        if(node.val <=high && node.val >=low){
            sum += node.val
            
        }
            if(node.left)queue.push(node.left);
            if(node.right)queue.push(node.right);
    }
    return sum 
};