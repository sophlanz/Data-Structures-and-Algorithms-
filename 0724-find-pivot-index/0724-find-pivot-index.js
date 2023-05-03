/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    for(let i=0;i<nums.length;i++){
        //get left sum
        let left=i-1

        let sumLeft=0;
        while(left >=0){
            sumLeft += nums[left]
            left--
        }
        //get right sum
        let right=i+1;
        let sumRight=0;
        while(right < nums.length){
            sumRight += nums[right];
            right++
        }

        if(sumLeft === sumRight) return i;
    }
    return -1
};