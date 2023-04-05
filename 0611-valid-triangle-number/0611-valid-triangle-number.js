/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums.sort((a,b)=>a-b);
    let count=0
    for(let k=nums.length-1;k>=2;k--){
        for(let i=0,j=k-1;i<j;) {
            if(nums[i]+nums[j]>nums[k]){
                count += j-i;
                j--
            }else{
                i++
            }
        }
    }
    return count
};