/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let subsets=[]
  const DFS=(subset,index)=> {
      subsets.push(subset);
      for(let i=index;i<nums.length;i++){
          DFS([...subset,nums[i]], i+1)
      }
  }
  DFS([],0)
  return subsets
};
