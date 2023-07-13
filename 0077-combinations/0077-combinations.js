/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
       let res=[];
    const DFS=(arr,start)=>{
        if(arr.length===k ){
            res.push(arr)
          return;
        }
    for(let i=start;i<=n;i++){
        DFS([...arr,i],i+1)
    }
        
    }
    DFS([],1)
    return res 
};
//     1 2 3 4
//      1
//   1 2.  1 3.  1 4
//res=[1,2] [2,3][3,4] [2,4]
//[1,2,3,4]i=2
//[1,2][2,3,4] 
//[1,3][3,4] 
//[2,3,4]
//[2,3][3,4]         i=2
//[2,4][]
//[3,4]
//[3,4]

