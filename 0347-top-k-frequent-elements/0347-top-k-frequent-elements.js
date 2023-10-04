/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freqMap = {};
    for(const num of nums){
        num in freqMap ? freqMap[num]++ : freqMap[num]=1;
    };
  const values =  Object.entries(freqMap).sort((a,b)=> b[1]-a[1]).map(([key,value])=> key)
    return values.splice(0,k)
};