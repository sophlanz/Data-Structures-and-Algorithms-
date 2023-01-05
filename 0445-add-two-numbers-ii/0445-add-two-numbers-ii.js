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
const s1=[];
const s2=[];
    while(l1) {
        s1.push(l1.val);
        l1=l1.next;
    }
    while(l2) {
        s2.push(l2.val);
        l2=l2.next;
    }
    let list = null;
    let carry=0;
    while(s1.length || s2.length || carry) {
        const v1 = s1.length ? s1.pop() : 0;
        const v2 = s2.length? s2.pop() :0;
        const node = new ListNode((v1+v2+carry)%10);
        carry = Math.floor((v1+v2+carry)/10)
        if(list) {
            node.next=list;
        }
        list=node;
    }
    return list
 
};