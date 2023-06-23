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
    let counter=0;
    while(curr){
        curr= curr.next
        counter++
    }
    if(counter ===1) return null
    //delete n-1
    //remove counter-n+1
    //connect counter-n+2 and counter-n
    curr=head;
    let idx=0
    while(curr){
        if(counter===n){
            return curr.next
        }
        if(idx === counter-n-1) {
            curr.next = curr.next.next
        }
        curr=curr.next
        idx++
    }
 
 return head
};