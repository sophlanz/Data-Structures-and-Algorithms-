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
    let children = new Set()
  for(const node of tree) {
    if(node.children){
          for(const child of node.children) {
              children.add(child.val);
          }
    }
  }
    for(const node of tree) {
        if(!children.has(node.val)) return node
    }
};