/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let nums=[];
    while(n > 0){
    nums.unshift(n)
    n--
}
       let res=[];
    let memo={}

    const DFS=(arr,rest)=>{
        if(arr.length===k && !(arr in memo)){
            res.push(arr)
            memo[arr]=1
        }
    for(let i=0;i<rest.length;i++){
        DFS([...arr,rest[i]],[...rest.slice(i+1)])
    }
        
    }
    DFS([],nums)
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

