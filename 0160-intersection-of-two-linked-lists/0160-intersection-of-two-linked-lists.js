/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let set = new Set();
    let curr= headA;
    while(curr){
        set.add(curr);
        curr = curr.next;
    }
   curr=headB;
    while(curr){
        if(set.has(curr)) return curr
        curr=curr.next
    }
    return null;
};
