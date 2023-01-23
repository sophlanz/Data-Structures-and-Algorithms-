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
    let set = new Set([]);
    for(const node of tree) {
        for(const child of node.children) {
            set.add(child.val);
        }
    }
    for(const node of tree) {
        if(!set.has(node.val)) return node;
    }
};