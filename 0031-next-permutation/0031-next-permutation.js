/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    //get pivot
    let pivot =-1;
    for(let i=nums.length-1;i>0;i--) {
        if(nums[i]>nums[i-1]) {
            pivot = i-1;
            break;
        }
    }
    if(pivot=== -1) {
        return nums.reverse();
    }
    for(let j=nums.length-1;j>pivot;j--) {
        if(nums[j]>nums[pivot]) {
            [nums[j], nums[pivot]]= [nums[pivot], nums[j]]
            break;
        }
    };
    for(let i=pivot+1, j=nums.length-1;i<j;i++,j--) {
         [nums[j], nums[i]]= [nums[i], nums[j]]
    }
    return nums
};