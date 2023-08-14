/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length <=3)return Math.max(...nums);
    if(nums.length===4){
        return Math.max(nums[0]+nums[2],nums[1]+nums[3])
    }

    const getRob = (house)=>{
        console.log(house)
           let dp=new Array(house.length).fill(0);
           dp[0]=house[0];
            dp[1]=house[1]
            dp[2]=house[2]+house[0]
            console.log(dp[2])
            for(let i=3;i<house.length;i++) {
            dp[i]=Math.max(house[i]+ dp[i-2],house[i]+dp[i-3]);
    }
        return Math.max(...dp)
        
    }
  return Math.max((getRob(nums.slice(1))), getRob(nums.slice(0,nums.length-1)))
 
};

