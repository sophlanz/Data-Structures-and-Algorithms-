/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let len=0;
    let maxLen=0;
   nums = new Set(nums)
    for(const num of nums){
          len=1
        if(!(nums.has(num-1))){
            let checkNum=num+1
            while(nums.has(checkNum)){
          
                len++
                checkNum++
            }
             maxLen=Math.max(maxLen,checkNum-num)
        }
       maxLen=Math.max(maxLen,len)
      
    }
    return maxLen
};
