/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
let start=0,
    map={},
    maxLen=0
    oneCount=0;
    for(let end=0;end<nums.length;end++) {
        if(nums[end]===1) {
            oneCount++
        }
        if((end-start+1)-oneCount >k) {
            if(nums[start]===1) {
                oneCount--
            }
            start++
        }
        maxLen=Math.max(maxLen,end-start+1);
    }
    return maxLen
};