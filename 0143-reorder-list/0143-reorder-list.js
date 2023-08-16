/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

var reorderList = function(head) {
 if(!head)return null;
    let fast=head;
    let slow=head;
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    };
    let mid=slow;
    const reverse = (node)=>{
        let curr=node;
        let prev=null;
        while(curr){
            let temp=curr.next;
            curr.next=prev;
            prev=curr;
            curr=temp;
        }
        return prev;
    }
    let curr2 = reverse(mid);
//will now have mid as last node, because it no longer points to anything. 
    let curr1=head;
//until cur2.next, otherwise, last node of reverse list (mid) would end up pointing to itself. 
    while(curr2.next){
        let temp = curr1.next;
        curr1.next=curr2;
        curr2 = curr2.next;
        curr1.next.next=temp;
        curr1=temp;
    }
    return head
}
