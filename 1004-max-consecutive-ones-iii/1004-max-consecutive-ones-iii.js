/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let start=0,
        onesCount=0,
        maxLen=0;
    for(let end=0;end<nums.length;end++) {
        //check if it's a one, if so increase one's count
        if(nums[end]===1) {
            onesCount++
        }
        //check if window size - ones is greater than k
        if((end-start+1 -onesCount) >k) {
            if(nums[start]===1) {
                onesCount--
            }
            start++
        }
        maxLen=Math.max(maxLen,end-start+1)
    }
    return maxLen
            
};