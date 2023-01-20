/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node[]} tree
 * @return {Node}
 */
var findRoot = function(tree) {
     const set = new Set()
    
    for (const node of tree) {
       
        for (const child of node.children) {
            set.add(child.val)
         
        }
    }
  
    let root = null
    
    for (const node of tree) {
        if (!set.has(node.val)) root = node
        
    }
    
    return root
};