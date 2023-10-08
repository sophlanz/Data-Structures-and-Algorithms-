/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l=0,r=nums.length-1;
    let best=nums[0];
    while(l<r){
        const mid = Math.floor((l+r)/2);
        if(nums[mid] > nums[r]){
            best = Math.min(nums[r],best)
            l=mid+1
        }else{
            best = Math.min(nums[l],best);
            r=mid
        }
    }
    return best
};

