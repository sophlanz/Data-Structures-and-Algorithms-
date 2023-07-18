/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let res = new Array(nums.length).fill(1);
    for(let i=1;i<nums.length;i++){
        let j=0;
        while(j<i){
             if(nums[j]<nums[i]){
            res[i]=Math.max(res[j]+1, res[i])
            j++
        }else{
            j++
        }
        }
       
    }
    return Math.max(...res)
};
