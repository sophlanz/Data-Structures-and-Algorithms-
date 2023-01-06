/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
let l = 0;
let r = nums.length-1;
while(l<=r) {
    let mid = Math.floor((l+r)/2);
    if(nums[mid]=== target) {
        return mid;
    }
    //left sorted
    if(nums[l]<=nums[mid]) {
        if(target <nums[l] ||  target>nums[mid]){
            l=mid+1
        } else {
            r=mid-1
        }
    } else {
        if(target<nums[mid] || target> nums[r]) {
            r=mid-1
        }else {
            l=mid+1
        }
    }
}
    return -1
    
};