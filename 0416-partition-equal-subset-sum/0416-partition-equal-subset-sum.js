/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
let sum=0;
    for(const num of nums){
        sum += num;
    }
    if(sum % 2 !== 0)return false;
    let half=sum/2;
    let memo ={};
    const DFS = (index,total)=>{
        if(`${index}+${total}`in memo){
            return memo[`${index}+${total}`];
        }
        if(total ===0)return true;
        if(index>nums.length)return false;
  
             if(total-nums[index]>=0 ){
              if(DFS(index+1,total-nums[index])){
                   memo[`${index}+${total}`]=true
                  return true;
              }
         }
            memo[`${index}+${total}`] = DFS(index+1,total)
     
       
     return memo[`${index}+${total}`] 
        
    }
   return DFS(0,half)
};      





