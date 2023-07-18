/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for(let i=0;i<nums.length;i++){
        let num = nums[i];
        nums[i]='x';
console.log(nums.indexOf(num))
        if(nums.indexOf(num) === -1)return num
        nums[i]=num;
        
    }
    
};