/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
   let res=[];
    const DFS = (array,index)=> {
        if(array[array.length-1] === graph.length-1) {
            res.push(array);
        }
        for(let i=0;i<graph[index].length;i++) {
            DFS([...array,graph[index][i]],graph[index][i])
        }
    }
    DFS([0],0);
    return res;
};
