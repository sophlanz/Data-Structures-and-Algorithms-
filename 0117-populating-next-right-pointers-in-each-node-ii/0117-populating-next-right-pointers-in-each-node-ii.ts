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
    const findNextNode = (root) =>{
        while(root.next != null) {
             root = root.next;
            if(root.left != null) return root.left
            if(root.right != null) return root.right
            
        }
        return null
    }
    if(!root) return null;
    if(root.left != null) {
        if(root.right != null) {
            root.left.next = root.right;
        }else {
            root.left.next = findNextNode(root);
        }
    }
    if(root.right != null) {
        if(root.next != null) {
            root.right.next = findNextNode(root);
        }
    }
    connect(root.right);
    connect(root.left);
    return root;
};