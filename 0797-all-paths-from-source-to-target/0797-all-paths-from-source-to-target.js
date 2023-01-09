/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
      var res = [];
    var path = [];  
					
    path.push(0);
   
    dfsSearch(0); 
    
    function dfsSearch(nodeIdx) {
         
        if (nodeIdx == graph.length - 1) {           
            res.push(path.slice(0));           
        } else
            for (nextNode of graph[nodeIdx]) {
                console.log(graph[nodeIdx], 'graph nodeIdx')
                path.push(nextNode);
                console.log(path, 'path after push nextNode');
                console.log(nextNode , 'next node')
                dfsSearch(nextNode);
                path.pop();
                console.log(path, 'path after pop')
            }
    }
    return res;
};