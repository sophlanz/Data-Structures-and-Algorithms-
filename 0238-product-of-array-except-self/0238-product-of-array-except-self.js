/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let productArray = new Array(nums.length).fill(0);
    let product=1;
    for(let i=0;i<nums.length;i++){
        productArray[i]=product;
        product *=nums[i];
    }
    product=1;
    for(let i=nums.length-1;i>=0;i--){
        productArray[i] = productArray[i]*product;
        product *= nums[i];
    }
    return productArray
};