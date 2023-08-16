/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let p1=head;
    while(n>0){
        p1 = p1.next;
        n--
    }
    if(!p1)return head.next
    let p2=head;
    while(p1.next){
        p1=p1.next;
        p2=p2.next;
    }
    p2.next=p2.next.next;
    return head;
    
};
