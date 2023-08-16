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
    let memo=[];
    const DFS = (index,sum)=>{
        memo[index]=memo[index]||[];
        if(memo[index][sum] !== undefined)return memo[index][sum]
        if(sum === 0)return true;
        if(index>= nums.length)return false;
        if(sum - nums[index]>=0){
            if(DFS(index+1, sum-nums[index])){
                memo[index][sum] = true;
                return true;
            }
        }
      return  memo[index][sum] = DFS(index+1,sum)

         
    }
       return DFS(0,half)
};
    

