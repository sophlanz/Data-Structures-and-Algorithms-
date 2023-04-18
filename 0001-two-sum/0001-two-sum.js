/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let idxMap={};
    for(let i=0;i<nums.length;i++){
        if(Object.keys(idxMap).length >0 && target-nums[i] in idxMap) {
            return [idxMap[target-nums[i]],i];
        }else{
            idxMap[nums[i]] = i;
        }
    }
};