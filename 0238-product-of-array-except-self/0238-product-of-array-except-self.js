/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res=new Array(nums.length).fill(0)
    let left=new Array(nums.length).fill(0);
    let right=new Array(nums.length).fill(0)
    for(let i=0;i<nums.length;i++){
        if(i===0){
            left[i]=1;
        }else{
            left[i]=left[i-1]*nums[i-1];
        }
    }
    for(let i=nums.length-1;i>=0;i--){
        if(i=== nums.length-1){
            right[i]=1;
        }else{
            right[i]=right[i+1]*nums[i+1]
        }
    }
    for(let i=0;i<nums.length;i++){
        res[i]=right[i]*left[i];
    }
    return res;
};

 