/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res=[];
  const DFS = (arr,rest)=>{
      if(arr.length===nums.length){
          res.push(arr)
          return;
      }
      for(let i=0;i<rest.length;i++){
          const add = rest[i];
          const newArray = [...arr,add]
          const newRest = [...rest.slice(0,i), ...rest.slice(i+1)]
          DFS(newArray,newRest);
      }
  }
DFS([],nums)
return res
};
