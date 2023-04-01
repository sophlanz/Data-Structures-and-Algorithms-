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
    let s1=[], s2=[];
    while(l1) {
        s1.push(l1.val);
        l1=l1.next;
    }
    while(l2) {
        s2.push(l2.val);
        l2=l2.next;
    }
    let carry =0;
    let list = null
    while(s1.length || s2.length || carry) {
        const v1 = s1.length ? s1.pop() : 0;
        const v2 = s2.length ? s2.pop() : 0;
        let sum = (v1+v2+carry);
        let digit = (sum%10);
         carry = Math.floor(sum/10);
        let node = new ListNode(digit);
        node.next = list;
        list = node;
    }
    return list

};