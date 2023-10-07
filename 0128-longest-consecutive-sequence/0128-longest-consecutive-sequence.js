/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let maxLen=0;
    for(const num of set){
        let len=1;
        if(set.has(num-1) && !(set.has(num+1))){
            let numToFind = num-1
            while(set.has(numToFind)){
                numToFind--
                len++
            }
        }
        maxLen=Math.max(maxLen,len);
    }
    return maxLen
};

