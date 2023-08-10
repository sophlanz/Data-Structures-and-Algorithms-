/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let pivot=0;
    for(let i=0;i<nums.length-1;i++){
        if(nums[i] > nums[i+1]) pivot=i+1;
    }
    let l=0,r=nums.length-1;
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        if(nums[(mid+pivot)%nums.length] === target)return true;
        if(nums[(mid+pivot)%nums.length] > target){
            r=mid-1
        }else{
            l=mid+1
        }
    }
    return false
};