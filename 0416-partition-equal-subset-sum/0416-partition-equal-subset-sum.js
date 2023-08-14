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
   let dp = [];
    const DFS = (index,sum) => {
        dp[index]=dp[index] ||[];
        if(sum === 0)return true;
        if( nums.length === 0 || index >= nums.length) return false;
        if(dp[index][sum] === undefined){
              if(sum - nums[index]>=0){
            if(DFS(index+1, sum-nums[index])){
                dp[index][sum]=true
               return true;
            }      
        }
             dp[index][sum]=DFS(index+1,sum)  
        }
         return dp[index][sum]
    }
    return DFS(0, sum/2)
};






