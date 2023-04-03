/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
 nums.sort((a,b)=>a-b);
    let closestSum = Infinity;
    for(let i=0;i<nums.length;i++) {
        let j=i+1;
        let k=nums.length-1;
        while(j<k) {
            let sum= nums[i] +nums[j] +nums[k];
            if(Math.abs(target-sum) < Math.abs(closestSum)) {
                closestSum = target-sum;
                console.log(closestSum)
            }
            if(sum > target) {
                k--
            }else{
                j++
            }
        }
    }
    return target - closestSum
};
   