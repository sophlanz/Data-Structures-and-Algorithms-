/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b);
    if(nums.length === 1 && nums[0] !== 0)return nums[0]-1

    for(let i=0;i<nums.length;i++){
        if(nums[i+1]-nums[i]>1) return nums[i] + 1
    }
    return nums[0]=== 0 ? nums[nums.length-1]+1 : 0
};