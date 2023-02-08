/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let res=[]
    const DFS= (arr,num)=> {
        if(arr[arr.length-1]=== graph.length-1) {
            res.push(arr);
            return;
        }
        for(let i=0;i<graph[num].length;i++) {
            DFS([...arr,graph[num][i]],graph[num][i] )
        }
    }
    DFS([0],0)
    return res;
};