/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
 let stack = [[0]];
    let paths=[]
    while(stack.length){
        let path = stack.pop();
        if(path[path.length-1]===graph.length-1){
            paths.push(path)
        }
        for(const node of graph[path[path.length-1]]){
            stack.push([...path,node]);
        }
    }
    return paths
    };
//time complexityO(2^n), possible paths from source to target, # of recursive calls
//space complexity O(n^2), less than the amount of recursive calls
//space with stack is O(2^n)
