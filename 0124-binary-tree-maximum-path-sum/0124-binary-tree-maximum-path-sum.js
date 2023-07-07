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
var maxPathSum = function(root) {
    let max = root.val;
    const findMax = (node)=>{
        if(node === null) return 0;
        let left = findMax(node.left);
        let right = findMax(node.right);
        let allSum = left + right + node.val;
        let leftSum = left + node.val;
        let rightSum = right+node.val;
        max = Math.max(max,allSum,leftSum,rightSum, node.val);
        return Math.max(node.val,leftSum,rightSum)
    }
    findMax(root);
    return max
};