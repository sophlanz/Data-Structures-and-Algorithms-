/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let idxMap={};
    for(let i=0;i<nums.length;i++){
        let num=nums[i];
        if(Object.keys(idxMap).length !==0){
            if(target-num in idxMap){
                return [idxMap[target-num],i ];
            }
        }
        idxMap[num]=i;
    }
};