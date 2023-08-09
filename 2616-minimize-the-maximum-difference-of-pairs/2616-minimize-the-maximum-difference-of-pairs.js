/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
 nums.sort((a,b)=>a-b)
let left = 0, right = nums[nums.length-1]-nums[0];
        while (left < right) {
            let mid = Math.floor((left + right)/2) , pairs = 0;
            for (let i = 1; i < nums.length && pairs < p; i++) {
                if (nums[i] - nums[i - 1] <= mid) {
                    pairs++;
                    i++;
                }
            }
            if (pairs >= p)
                right = mid;
            else
                left = mid + 1;
        }
        return left;
};