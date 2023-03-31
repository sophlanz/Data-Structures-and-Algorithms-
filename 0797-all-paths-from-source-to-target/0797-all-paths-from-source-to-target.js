/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let res=[];
 const DFS = (path) => {
     if(path[path.length-1]===graph.length-1) {
         res.push(path);
     }
     for(const child of graph[path[path.length-1]]) {
         DFS([...path,child]);
     }
 }
 DFS([0])
    return res;
};