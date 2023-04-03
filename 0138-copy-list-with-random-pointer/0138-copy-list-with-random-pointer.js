/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  let curr=head;
    let copyMap = new Map();
    
    while(curr){
        let copy = new Node(curr.val)
       copyMap.set(curr,copy) 
        curr = curr.next;
    }
    curr=head;
    while(curr){
        let copy = copyMap.get(curr);
        copy.next = copyMap.get(curr.next) || null
        copy.random = copyMap.get(curr.random) || null
        curr = curr.next;
        
    }
    return copyMap.get(head)
};