/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
   
   if(nums.length===1) return nums[0];
    if(!nums.length) return 0;
    let totals = [nums[0], Math.max(nums[0],nums[1])];
    for(let i=2;i<nums.length;i++) {
        totals[i]=Math.max(nums[i]+totals[i-2], totals[i-1])
    }
    return totals[nums.length-1]
};