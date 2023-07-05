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
    let curr=head;
    let nums=[];
    while(curr){
       nums.push(curr.val);
        curr=curr.next;
    }
 
    const isPalindrome = (arr) => {
        let l = 0;
        let r = arr.length-1;
        while(l <= r){
            if(arr[l] !== arr[r]){
                 return false;
            }else{
                l++
                r--
            }
        }
        return true;
    }
  return isPalindrome(nums)
}