/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
 const getSum = ()=>{
        let sum=0;
        for(const num of nums){
            sum+= num;
        }
        return sum;
    }
let sum=getSum();
if(sum % 2 !== 0)return false;
let half=sum/2;
let dp = new Array(nums.length).fill(false).map(()=> new Array(half+1).fill(false));
    for(let row=0;row<nums.length;row++){
        dp[row][0] = true;
    }
    for(let col=0;col<=half;col++){
        dp[0][col] = nums[0] === col
    }
    for(let i=1;i<nums.length;i++){
        for(let j=1;j<=half;j++){
            if(dp[i-1][j]){
                dp[i][j]=true;
            }else{
               if(j>=nums[i]) {
                 dp[i][j]=dp[i-1][j-nums[i]]
               }
            }
        }
    }
    return dp[nums.length-1][half]
};      





