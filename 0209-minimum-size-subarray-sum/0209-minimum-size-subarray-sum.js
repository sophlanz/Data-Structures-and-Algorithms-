/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
let sum=0,
    minLen=Infinity,
    start=0;
    for(let end=0;end<nums.length;end++) {
        sum += nums[end];
        while(sum >= target) {
            minLen = Math.min(minLen, end-start+1)
            sum -= nums[start];
            start++
        }
     
    }
    return minLen === Infinity ? 0 : minLen;
};