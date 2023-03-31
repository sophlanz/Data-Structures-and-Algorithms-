/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let stack=[[0]];
    let res=[];
    while(stack.length) {
        let path = stack.pop();
        if(path[path.length-1]=== graph.length-1) {
            res.push(path);
        }else {
            for(const child of graph[path[path.length-1]]) {
                stack.push([...path,child]);
            }
        }
    }
    return res;
};