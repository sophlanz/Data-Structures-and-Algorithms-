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
   let curr=head;
    while(curr){
        if(curr.child){
            let end = curr.child;
            while(end.next){
                end=end.next;
            }
            end.next = curr.next;
            if(end.next)end.next.prev = end;
            curr.next = curr.child;
            curr.next.prev = curr;
            curr.child=null;
        }
        curr = curr.next;
    }
    return head;
};
//space O(D)max depth of child nodes, stack
//Time O(N)
