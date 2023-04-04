/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let paths=[];
    const DFS = (path,index)=> {
        if(path[path.length-1]===graph.length-1) {
            paths.push(path);
        }
       for(let i=0;i<graph[index].length;i++){
           DFS([...path,graph[index][i]], graph[index][i])
       }
    }
    DFS([0],0)
    return paths
};