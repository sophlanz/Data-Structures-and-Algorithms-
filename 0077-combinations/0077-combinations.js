/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {

 let res=[];
    const DFS = (arr,index)=> {
        if(arr.length ===k){
            res.push(arr)
            return;
        }
        for(let i=index;i<=n;i++){
            DFS([...arr,i],i+1)
        }
    }
    DFS([],1)
    return res;
};
