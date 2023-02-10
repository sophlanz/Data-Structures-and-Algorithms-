/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    nums.sort((a,b)=>a-b)
let memo = new Map();
    let res = [];
    const DFS=(idx)=> {
        if(memo.has(idx)) return memo.get(idx);
        let subset = [];
        for(let i=idx-1;i>=0;i--) {
            if(nums[idx]%nums[i] ===0) {
                let prevSubset = DFS(i);
                if(prevSubset.length>subset.length)subset =prevSubset
            }
        }
        let valid = [...subset,nums[idx]];
        memo.set(idx,valid);
        return valid
    }
    for(let i=nums.length-1;i>=0;i--) {
       let newSubset= DFS(i)
    if(newSubset.length >res.length) {
        res=newSubset
    }
    }
    console.log(res)
    return res;
};

