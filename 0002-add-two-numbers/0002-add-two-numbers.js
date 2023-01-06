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
    let dummy = new ListNode(0);
    let list = dummy;
    let carry=0;
    while(l1 || l2 || carry) {
        const v1=l1 ? l1.val : 0;
        const v2=l2? l2.val : 0;
        const node = new ListNode((v1+v2+carry)%10);
        carry = Math.floor((v1+v2+carry)/10);
        list.next = node;
        list = node;
        l1= l1? l1.next: null;
        l2=l2?l2.next:null;
    }
    return dummy.next;
};