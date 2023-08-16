/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let total=0;
    for(const num of nums){
        total += num;
    }
    if(total % 2 !== 0)return false;
    let half=total/2
    let dp = new Array(nums.length).fill(false).map(()=> new Array(half+1).fill(false));
    for(let row=0;row<nums.length;row++){
        dp[row][0] = true;
    }
    for(let col=0;col<=half;col++){
        dp[0][col] = nums[0]===col
    }
    for(let i=1;i<nums.length;i++) {
        for(let sum=1;sum<=half;sum++){
            if(dp[i-1][sum]){
                //this sum is possible, index doesn't matter
                dp[i][sum]=true;
            }else{
                if(sum > nums[i]){
                    //if we know a - b = c, true. then we knows a = b + c, so a is true. same for it being false. 
                    //false means there is no b. true means that value either exists by itself or it can be created
                    //by summing the numbers. 
                    dp[i][sum] = dp[i-1][sum-nums[i]]
                }else{
                    dp[i][sum]=false
                }
            }
        }
    }
    return dp[nums.length-1][half]
};
    
