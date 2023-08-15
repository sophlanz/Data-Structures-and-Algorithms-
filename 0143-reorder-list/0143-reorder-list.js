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
    let fast=head;
    let slow=head;
    while(fast && fast.next){
        fast=fast.next.next;
        slow=slow.next;
    }
    let mid=slow;
    let reverseList = (node)=>{
        let prev=null;
        let curr=node;
        while(curr){
            let temp = curr.next;
            curr.next=prev;
            prev=curr;
            curr=temp;
        }
        return prev;
    }
    let secondHalf=reverseList(mid)
   let firstHalf=head;
    while(secondHalf.next){
       let temp1=firstHalf.next;
        let temp2=secondHalf.next;
        firstHalf.next=secondHalf;
        secondHalf.next=temp1;
        secondHalf=temp2;
        firstHalf=temp1
        
    }
    return head
};