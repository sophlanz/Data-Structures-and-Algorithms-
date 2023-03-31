/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
   let stack = [[0]]
      let  result = []
        while (stack.length){
           let array = stack.pop()
            if (array[array.length-1] === graph.length-1) {
                  result.push(array)
            }
           
            for(const node of graph[array[array.length-1]])  {
                stack.push([...array,node])
            }
                
        }
           
                
        return result
};

