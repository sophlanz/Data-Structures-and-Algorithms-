/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
 let list1= new ListNode(0,null);
let list2= new ListNode(0,null);
    let dummy1=list1;
    let dummy2=list2
    let curr=head;
    while(curr){
        if(curr.val < x){
            list1.next=new ListNode(curr.val,null);
            list1=list1.next
        }else{
            list2.next=new ListNode(curr.val,null);
            list2=list2.next;
        }
        curr=curr.next;
    }
    list1.next=dummy2.next
return dummy1.next
};