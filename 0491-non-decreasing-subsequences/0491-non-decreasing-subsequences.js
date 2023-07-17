/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    let res=[];
    let freqMap={};
    const DFS = (arr,index) =>{
        if(arr[arr.length-1] < arr[arr.length-2]) return
        if(arr.length >=2){
            if(!(arr in freqMap)){
                freqMap[arr]=1;
                res.push(arr);
            }
        }
        if(index === nums.length ){
            return;
        }
        for(let i=index;i<nums.length;i++){
            DFS([...arr,nums[i]], i+1)
        }
    }
    DFS([],0)
    return res;
};
