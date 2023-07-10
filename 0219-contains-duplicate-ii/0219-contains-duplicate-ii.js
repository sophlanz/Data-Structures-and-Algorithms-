/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let idxMap={};
    for(let i=0;i<nums.length;i++){
        let num = nums[i];
        if(!(num in idxMap)) idxMap[num]=i;
        else{
           if(i-idxMap[num] <= k )return true
           else{
               idxMap[num]=i
           } 
    }
  
    }
    return false
};