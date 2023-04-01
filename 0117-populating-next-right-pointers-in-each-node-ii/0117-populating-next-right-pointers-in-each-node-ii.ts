/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
    const getNext = (node) => {
        while(node.next) {
            node = node.next;
            if(node.left) return node.left;
            if(node.right) return node.right
        }
        return null
    }
  if(!root)return null;
    if(root.left) {
        if(root.right) root.left.next = root.right;
        else root.left.next = getNext(root);
    }
    if(root.right) {
        root.right.next = getNext(root);
    }
    if(root.right)connect(root.right);
    if(root.left)connect(root.left);
    return root
};