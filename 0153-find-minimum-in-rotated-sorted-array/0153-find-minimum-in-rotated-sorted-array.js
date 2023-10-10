/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l=0,r=nums.length-1;
    let best=nums[0];
    while(l<r){
        let mid = Math.floor((l+r)/2);
        if(nums[r]<nums[mid]){
            best = Math.min(best,nums[r]);
            l=mid+1;
        }else{
            best=Math.min(best,nums[l]);
            r=mid;
        }
    }
    return best
};