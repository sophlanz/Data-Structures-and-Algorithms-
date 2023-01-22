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
    if(!root ) return null;
    const getNextNode = (node) => {
        while(node.next !=null) {
            node = node.next;
            if(node.left != null ) return node.left;
            if(node.right != null) return node.right;
        }
        return null;
    }
  if(root.left != null) {
      if(root.right != null) {
          root.left.next = root.right
      }else {
          root.left.next = getNextNode(root);
      }
  }
    if(root.right !=null) {
        if(root.next) {
            root.right.next = getNextNode(root);
        }
    }
    connect(root.right);
    connect(root.left);
    return root
};