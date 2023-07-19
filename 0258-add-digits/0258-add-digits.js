/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
let nums = num.toString()
   let sum
    while(nums.length >1){
         sum=0
        for(const int of nums){
        sum += Number(int);
    }
        nums = sum.toString()
    
    }
    return nums
};