/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let paths = [];
    const DFS = (index,path) => {
        if(path[path.length-1] === graph.length-1) {
            paths.push(path);
            return;
        }
        for(let i=0;i<graph[index].length;i++) {
            DFS(graph[index][i], [...path,graph[index][i]])
        }
    }
    DFS(0,[0]);
    return paths;
};