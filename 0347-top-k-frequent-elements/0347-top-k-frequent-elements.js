/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    let freqMap={};
    for(let i=0;i<nums.length;i++){
        freqMap[nums[i]]?freqMap[nums[i]]++ : freqMap[nums[i]]=1;
    }

    Object.values(freqMap).sort((a,b)=> b-a);

    return Object.keys(freqMap).sort((a,b)=> freqMap[b]-freqMap[a]).slice(0,k)
};