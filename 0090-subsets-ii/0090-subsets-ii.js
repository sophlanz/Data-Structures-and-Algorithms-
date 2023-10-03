/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [[]]
    let seen = new Map();
    const DFS = (arr,index)=>{
        if(index>nums.length)return;
        for(let i=index;i<nums.length;i++){
            const newArr = [...arr,nums[i]]
            const str = newArr.sort((a,b)=> a-b).toString()
          if(!seen.get(str)){
              seen.set(str,true)
              res.push(newArr)
          }
            DFS(newArr,i+1)
        }
    }
    DFS([],0)
    return res
};


