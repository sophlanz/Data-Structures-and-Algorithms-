/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res=[]
    let memo = {}
    const DFS=(arr,rest)=>{
        if(!rest.length && !(arr in memo)){
            memo[arr]=1;
            res.push(arr)
        }
        for(let i=0;i<rest.length;i++){
            DFS([...arr,rest[i]],[...rest.slice(0,i), ...rest.slice(i+1)])
        }  
}
    DFS([],nums)
    return res;
};