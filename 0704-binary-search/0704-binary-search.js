/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l=0,r=nums.length-1;
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        if(target === nums[mid]) return mid;
        if(target > nums[mid]){
            l=mid+1
        }else{
            r=mid-1
        }
    }
    return -1
};