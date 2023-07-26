/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freqMap={};
    for(const num of nums){
        num in freqMap ? freqMap[num]++ : freqMap[num]=1;
    }
  let sorted= Object.entries(freqMap).sort((a, b) => b[1] - a[1]).map(([key,value]) => key);
    console.log(sorted)
    return sorted.slice(0,k)

    
};