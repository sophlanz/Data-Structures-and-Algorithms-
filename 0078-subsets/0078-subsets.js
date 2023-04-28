/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
let subsets=[];
    subsets.push([]);
    for(let i=0;i<nums.length;i++){
        let currNum=nums[i];
        let length = subsets.length
        for(let j=0;j<length;j++){
            const subset=subsets[j].slice(0);
            subset.push(currNum);
            subsets.push(subset);
        }
    }
    return subsets
};
 