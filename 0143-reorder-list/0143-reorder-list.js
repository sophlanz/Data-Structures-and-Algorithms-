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
    if (!head) return;
    let curr = head, middle = findMiddle(head);
    let rev = reverseList(middle.next);
   while(rev){
       let temp = curr.next;
       curr.next = rev;
       rev=rev.next;
       curr.next.next=temp
       curr=temp
   }
    middle.next = null;
};

var findMiddle = function(head) {
    if (!head) return;
    let middle = head;
    while (head && head.next) {
        head = head.next.next;
        middle = middle.next;
    }
    return middle;
}

var reverseList = function(head) {
    if (!head) return;
    let prev = null;
    while (head) {
        const saved = head.next;
        head.next = prev;
        prev = head;
        head = saved;
    }
    return prev;
}
