/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    const findNext = (node)=> {
        while(node.next){
            node=node.next;
            if(node.left)return node.left;
            if(node.right)return node.right
        }
        return null;
    }
    if(!root) return null;
    if(root.left){
        if(root.right) root.left.next = root.right;
        else{
            root.left.next = findNext(root);
        }
    }
    if(root.right){
        root.right.next = findNext(root);
    }
    connect(root.right);
    connect(root.left);
    return root
};