/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicatesUnsorted = function(head) {
   let dummy = new ListNode(0);
    let curr = head;
    let seen = new Set();
    let vals=[];
    let toDelete = new Set();
    while(curr){
        if(!seen.has(curr.val)){
            seen.add(curr.val)
            vals.push(curr.val)
        }else{
            toDelete.add(curr.val);
        }
        curr=curr.next;
    }
    let temp = null
    for(let i=vals.length-1;i>=0;i--){
     if(toDelete.has(vals[i]))continue;
        let node = new ListNode(vals[i],temp)
        temp = node; 
    }
   return temp
  
        
    
    
};