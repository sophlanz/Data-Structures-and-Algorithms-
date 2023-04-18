/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let set = new Set(nums);
    if(nums.length === set.size) return false
    else return true
    
};