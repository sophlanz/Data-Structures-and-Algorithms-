/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let res=[];
  let stack=[[0]];
    while(stack.length) {
        let path = stack.pop();
        if(path[path.length-1]===graph.length-1) {
            res.push(path)
        }
        for(const idx of graph[path[path.length-1]]) {
            stack.push([...path, idx]);
        }
    }
    return res;
};