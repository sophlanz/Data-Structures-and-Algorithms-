/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
let start=0,
    sum=0,
    minLen=Infinity;
    for(let end=0;end<nums.length;end++) {
        let rChar = nums[end];
        sum += rChar
        while(sum >= target) {
            minLen=Math.min(minLen,end-start+1);
            let lChar = nums[start]
            sum -= lChar
            start++
        }
        
    }
   return minLen === Infinity ? 0 : minLen;
};