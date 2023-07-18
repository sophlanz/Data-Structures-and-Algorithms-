/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freqMap = {};
    for(let i=0;i<nums.length;i++){
        let num = nums[i];
        num in freqMap ? freqMap[num]++ : freqMap[num]=1;
        if(freqMap[num]>= nums.length/2)return num;
    }
};