/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
      if (n == 0) return [];
    
   

    function findAllUniqueTrees(start, end) {
        let res = [];
        
      
        if (start > end) {
            res.push(null);
            return res;
        };
        
        if (start == end) {
            res.push(new TreeNode(start));
            return res;
        }
        
        for (let i = start; i <= end; i++) {
            const leftSubTrees = findAllUniqueTrees(start, i - 1);
            const rightSubTrees = findAllUniqueTrees(i + 1, end);
            
            for (const leftSubTree of leftSubTrees) {
                for (const rightSubTree of rightSubTrees) {
                    const root = new TreeNode(i);
                    root.left = leftSubTree;
                    root.right = rightSubTree;
                    res.push(root);
                }
            }
        }
        
        return res;
    }
     return findAllUniqueTrees(1, n);
    

};