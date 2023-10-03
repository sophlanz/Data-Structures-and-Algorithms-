/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let list = new ListNode(0);
    let carry=0;
    let curr=list;
    while(l1 || l2 || carry ){
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const sum = (val1 + val2 + carry)%10;
        carry = Math.floor((val1 + val2 + carry)/10);
        const newNode = new ListNode(sum);
        curr.next = newNode;
        curr=curr.next
        l1= l1 ? l1.next : null;
        l2= l2 ? l2.next : null;
    }
    return list.next
};