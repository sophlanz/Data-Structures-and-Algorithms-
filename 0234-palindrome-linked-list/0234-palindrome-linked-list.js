/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    let curr = head;
    let vals=[];
    while(curr){
        vals.push(curr.val);
        curr = curr.next
    }
   
    return vals.toString() === vals.reverse().toString();
};