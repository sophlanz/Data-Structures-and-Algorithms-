/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let start=0,
        sum=0,
        minLen=Infinity;
 //loop through nums
    for(let end=0; end<nums.length;end++) {
        //add nums[end] to the sum
        sum += nums[end]
        //sum >= target
        while(sum >=target) {
            minLen = Math.min(minLen,end-start+1)
            sum -= nums[start]
            start++
        }
        
    }
    return minLen === Infinity ? 0 : minLen;

};