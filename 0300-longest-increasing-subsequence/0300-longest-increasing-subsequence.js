/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp=[];
    dp[0]=0;
    let paths =[];
    for(let i=1;i<nums.length;i++){
        if(nums[i] > nums[dp[dp.length-1]]){
          dp.push(i);
        }else{
            if(nums[i]<nums[dp[0]]) dp[0]=i
            else{
                let l=0,r=dp.length-1;
            while(l<r){
                let mid = Math.floor((l+r)/2)
                if(nums[dp[mid]]=== nums[i]) {
                    l=mid
                    break;
                }
                if(nums[dp[mid]] > nums[i] ){
                    r=mid
                }else{
                    l=mid+1
                }
            }
                dp[l]=i;
            }
           
        }
    }
   
    return dp.length
};
