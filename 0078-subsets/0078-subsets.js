/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const subsets = [];
  // start by adding the empty subset
  subsets.push([]);
  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i];
    // we will take all existing subsets and insert the current number in them to create 
    // new subsets
    const n = subsets.length;
    for (j = 0; j < n; j++) {
      // create a new subset from existing subset and insert the current element to it
      const set1 = [...subsets[j]];
      set1.push(currentNumber);
      subsets.push(set1);
    }
  }

  return subsets;
 
    
};