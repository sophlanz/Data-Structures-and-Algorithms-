/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length <=3){
        return Math.max(...nums)
    }
  const rob = (num)=>{
      console.log(num)
      let dp=[];
      dp[0]=num[0];
      dp[1]=num[1]
      dp[2]=num[0] + num[2]
      for(let i=3;i<num.length;i++){
         dp[i] = Math.max(num[i] + dp[i-2], num[i] + dp[i-3])
      }
      return Math.max(...dp)
  
  }

  return Math.max(rob(nums.slice(0,nums.length-1)),rob(nums.slice(1)) )
};

