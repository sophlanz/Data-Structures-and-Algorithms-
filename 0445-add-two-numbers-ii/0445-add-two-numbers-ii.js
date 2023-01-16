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
 let stack1=[],
     stack2=[];
    while(l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    while(l2) {
        stack2.push(l2.val);
        l2=l2.next;
    }
    let carry=0;
    let list = null;
    while(stack1.length || stack2.length ||carry ) {
        const v1 = stack1.length ? stack1.pop() : 0;
        const v2= stack2.length ? stack2.pop() :0;
        const node = new ListNode((v1+v2+carry)%10);
        carry = Math.floor((v1+v2+carry) /10);
        node.next=list;
        list=node;
    }
    return list
};