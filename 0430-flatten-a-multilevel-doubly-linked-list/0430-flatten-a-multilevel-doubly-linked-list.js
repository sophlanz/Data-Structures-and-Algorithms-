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
    if(!head) return head
    let cur = head;
    let stack = [];
    while(cur) {
        if(cur.child) {
            if(cur.next) stack.push(cur.next);
            cur.next = cur.child;
            cur.next.prev = cur;
            cur.child = null;
        } else if(!cur.next && stack.length !==0) {
            cur.next = stack.pop();
            cur.next.prev = cur;
        }
        cur = cur.next;
    }
    return head;
};