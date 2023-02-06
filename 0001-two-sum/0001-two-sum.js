/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let idxMap ={};
    for(let i=0;i<nums.length;i++) {
        let ans = target-nums[i];
        if(ans in idxMap) return [idxMap[ans], i]
        else idxMap[nums[i]] = i;
    }
};