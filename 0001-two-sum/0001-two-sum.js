/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let idxMap = {};
    for(let i=0;i<nums.length;i++){
        const num = nums[i]
        const valToFind = target-num;
        if(valToFind in idxMap){
            return [idxMap[valToFind], i];
        }else{
            idxMap[num]=i;
        }
    }
};