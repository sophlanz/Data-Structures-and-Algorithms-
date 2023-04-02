/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res=[];
    const DFS = (curr, rest) => {
        if(curr.length === nums.length) {
            res.push(curr)
        }
        for(let i=0;i<rest.length;i++) {
            DFS([...curr,rest[i]], [...rest.slice(0,i) , ...rest.slice(i+1)])
        }
    }
    DFS([],nums)
    return res
};