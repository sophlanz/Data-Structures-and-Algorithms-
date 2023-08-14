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
    let dp = new Array(nums.length).fill(null).map(()=> new Array(half+1))
    for(let i=0;i<nums.length;i++){
        dp[i][0]=true;
    }
 
    for(let i=0;i<nums.length;i++){
        for(let j=1;j<=half;j++){
           if(i-1>=0){
               dp[i][j]= dp[i-1][j] || (j >= nums[i] ? dp[i - 1][j - nums[i]] : false);
           }else{
               dp[i][j]= nums[i]===j
           }
              
            }
        }
    
    return dp[nums.length-1][half];
};      





