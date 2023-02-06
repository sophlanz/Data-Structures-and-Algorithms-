/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
 let memo = new Map();
    let res=[]
    nums.sort((a,b)=> a-b);
    const dp = (idx) => {
        if(memo.has(idx)) return memo.get(idx);
        let subSet=[]
        for(let i=idx-1;i>=0;i--) {
            if(nums[idx] % nums[i]===0) {
                let prevSubset = dp(i);
                if(prevSubset.length > subSet.length) subSet=prevSubset
            }
        }
        let res = [...subSet,nums[idx]];
        memo.set(idx, res);
        return res;
    }
    for(let i=nums.length-1;i>=0;i--) {
        let curr = dp(i);
        if(curr.length > res.length) {
            res=curr;
        }
    }
    return res;
};

