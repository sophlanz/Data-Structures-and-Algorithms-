/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
let sum=0;
    for(let i=0;i<nums.length;i++){
        sum += nums[i];
    }
    if(sum % 2 !== 0){
        return false;
    }
   let memo = {};
    const DFS = (index,sum) => {
       if(`${index}+${sum}`in memo) {
           return memo[`${index}+${sum}`]
       }
        if(sum === 0)return true;
        if( nums.length === 0 || index >= nums.length) return false;
        if(sum - nums[index]>=0){
            if(DFS(index+1, sum-nums[index])){
                return true;
            }
        }
        return memo[`${index}+${sum}`]=DFS(index+1,sum);
    }
    return DFS(0, sum/2)
};






