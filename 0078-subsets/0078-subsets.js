/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let subsets =[[]];
    const DFS = (arr,index)=>{
        if(index>nums.length)return;
        for(let i=index;i<nums.length;i++) {
            const newSubset=[...arr,nums[i]]
            subsets.push(newSubset)
            DFS(newSubset,i+1)
        }
    }
    DFS([],0)
    return subsets
};
