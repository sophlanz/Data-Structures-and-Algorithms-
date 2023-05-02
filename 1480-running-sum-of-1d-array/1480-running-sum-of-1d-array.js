/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let res=[];
    let sum=0;
    for(let i=0;i<nums.length;i++){
        let int = nums[i];
        sum += int;
        res.push(sum);
    }
    return res
};