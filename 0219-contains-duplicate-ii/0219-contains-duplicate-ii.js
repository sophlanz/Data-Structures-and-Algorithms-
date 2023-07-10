/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let idxMap={};
    for(let i=0;i<nums.length;i++){
        let num = nums[i];
        if(!(num in idxMap)) idxMap[num]=[i];
        else{
            let indexes=idxMap[num];
            for(const index of indexes){
                if(i-index<=k) return true;
            }
            idxMap[num].push(i);
        }
    }
    return false
};