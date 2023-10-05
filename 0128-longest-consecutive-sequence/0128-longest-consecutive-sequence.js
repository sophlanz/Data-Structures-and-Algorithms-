/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(!nums.length)return 0
    nums=nums.sort((a,b)=> a-b)
  let currLen=1, maxLen=1;
    for(let i=1;i<nums.length;i++){
        const diff = nums[i]- nums[i-1]
        if(diff===1){
            currLen++
            maxLen=Math.max(maxLen,currLen)
        }else if(nums[i] !== nums[i-1]){
            currLen=1
        }
    };
    return maxLen
     
};
