/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
//start
let start =0;
//sum
let sum =0;
//minLen
let minLen = Infinity;
//loop through nums
for(let end=0; end<nums.length;end++) {
//add nums[end] to the sum
sum += nums[end];
//while the sum is >= target, check for min length, length of current window is end-start+1 to account for 0 index
    while(sum >= target) {
        minLen = Math.min(minLen, end-start +1)
        //remove the left from the sum
        sum -= nums[start]
        //begin shrining the window from the left to see if we can get a shorter length
        start++
}

}
//return the length, if it's still infinity, it's imposibble to sum up the values to the target, return 0
return minLen === Infinity ? 0 : minLen;
};