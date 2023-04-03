/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let l=0,r=nums.length;
    //get start
    while(l<=r) {
        let mid= Math.floor((l+r)/2);
        if(nums[mid]>=target) {
            r=mid-1
        }else{
            l=mid+1
        }
    }
    let start=l
    if(nums[start] !== target) return [-1,-1];
    l=0,r=nums.length-1
    while(l<=r) {
        let mid = Math.floor((l+r)/2);
        if(nums[mid]<=target) {
            l=mid+1
        }else{
            r=mid-1
        }
        
    }
    let end = r;
    return [start,end]
};
//nums = [5,7,7,8,8,10]
//low=3
//high=2
//mid=3
//start=low=3
//nums[mid] >= target ? move higher left
//low=5
//high=4
//mid=5
//end=high=4
//nums[mid]<= target ? move lower right