/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    let amountOnes=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===1)amountOnes++
    }
    let amountZeros=0;
    for(let i=0;i<amountOnes;i++) {
        if(nums[i]===0)amountZeros++
    };
    let minSwaps=amountZeros;
    let end=amountOnes-1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0) {
            amountZeros-= 1;
        }
        end = (end+1) % (nums.length);
        if(nums[end]===0) {
            amountZeros++
        }
        minSwaps = Math.min(minSwaps,amountZeros)
    }
    return minSwaps
};