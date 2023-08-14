/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    //parameters sum and index
    //base can sum===0 or index>nums.length
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum += nums[i];
    }
    if(sum % 2 !== 0)return false
    let half=(sum/2)
    let dp = new Array(nums.length).fill(false).map(()=> new Array(half+1).fill(false))
    for(let i=0;i<nums.length;i++){
        dp[i][0]=true;
    }
    for(let j=1;j<=half;j++){
        dp[0][j]= nums[0] === j
    }
 
    for(let i=1;i<nums.length;i++){
        for(let j=1;j<=half;j++){
          if(dp[i-1][j]){
              dp[i][j]= true;
          }else{
              if(j >= nums[i]){
                  dp[i][j]=dp[i-1][j-nums[i]]
              }
          }
              
            }
        }
    return dp[nums.length-1][half];
};      





