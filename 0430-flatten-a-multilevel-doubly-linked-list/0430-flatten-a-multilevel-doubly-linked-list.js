/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  let curr = head;
    let stack=[]
    const traverse = (curr)=> {
        if(!curr)return
        if(curr.child) {
            if(curr.next)stack.push(curr.next);
            curr.next = curr.child;
            curr.next.prev = curr;
            curr.child = null;
        }else if(!curr.next && stack.length !==0) {
            curr.next = stack.pop();
            curr.next.prev = curr;
        }
        traverse(curr.next)
    }
    traverse(curr);
    return head;
  
};
