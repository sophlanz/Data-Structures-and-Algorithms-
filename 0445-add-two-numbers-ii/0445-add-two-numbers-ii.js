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
    let s1=[];
    let s2=[];
    while(l1){
        s1.push(l1.val)
        l1=l1.next;
    }
    while(l2){
        s2.push(l2.val);
        l2=l2.next;
    }
    let carry=0;
    let list=null
    while(s1.length || s2.length || carry) {
        let v1= s1.length ? s1.pop() : 0;
        let v2= s2.length ? s2.pop() : 0;
        let node = new ListNode((v1+v2+carry)%10);
        carry=Math.floor((v1+v2+carry)/10)
        node.next = list;
        list=node;
    }
    return list
};
//Time complexity O(m+n)length of lists
//Space compleity O(m+n) length of lists stored in stack