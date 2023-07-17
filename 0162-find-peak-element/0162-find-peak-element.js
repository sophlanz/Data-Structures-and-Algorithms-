/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length===1)return 0;
    if(nums.length===2)return nums.indexOf(Math.max(...nums))
    for(let i=nums.length-1;i>=1;i--){
        if(nums[i-1] > nums[i]){
            if(nums[i-2]<nums[i-1]){
                return i-1;
            }
            if(!nums[i-2]){
                return i-1
            }
        }
    }
    return nums.indexOf(Math.max(...nums))
};