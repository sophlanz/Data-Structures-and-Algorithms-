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
  if(!headA || !headB) return null;
    let currA = headA;
    let currB = headB;
    while(currA !== currB) {
        currA = (currA !== null ? currA.next: headB);
        currB = (currB !== null? currB.next : headA)
    }
    return currA
};
