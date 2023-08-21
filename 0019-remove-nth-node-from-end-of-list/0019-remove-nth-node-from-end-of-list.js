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
    let curr=head;
    while(n>0){
        curr=curr.next;
        n--
    };
    if(!curr)return head.next
let p2=curr;
let p1=head;
while(p2.next){
    p1=p1.next;
    p2=p2.next;
}
  
    p1.next=p1.next.next;
    return head;
    
};