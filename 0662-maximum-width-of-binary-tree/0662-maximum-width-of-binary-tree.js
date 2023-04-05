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
var widthOfBinaryTree = function(root) {
    let queue = [[root,0]];
    let max=0;
    while(queue.length){
        let levelSize = queue.length;
        let minIdx = queue[0][1];
        let maxIdx = queue[queue.length-1][1]
        for(let i=0;i<levelSize;i++){
            let [node,index] = queue.shift()
            let normalizedIndex = index-minIdx;
            if(node.left)queue.push([node.left, normalizedIndex*2]);
            if(node.right)queue.push([node.right,(normalizedIndex*2)+1])
        }
        max=Math.max(max, maxIdx-minIdx+1);
    }
    return max
};