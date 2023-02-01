/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
    // build 2 graphs
	let red = new Map();
    let blue = new Map();
    for (const [from, to] of redEdges){
        if(!red.has(from)){
            red.set(from, [to]);
        }
        else red.get(from).push(to);
    }
    for (const [from, to] of blueEdges){
        if(!blue.has(from)){
            blue.set(from, [to]);
        }
        else blue.get(from).push(to);
    }
    let output = new Array(n).fill(-1);
    let redVisited = new Set();
    let blueVisited = new Set();
    let queue = [[0,'r'],[0,'b']];
    let path = 0;
    while (queue.length){
        

        let size = queue.length
        for (let i = 0; i < size; i++){
            let [node, color] = queue.shift();
            if(output[node] === -1){ // set output if first time reaching node
           
                output[node] = path;    
            }; 
            let graph = color === 'r' ? red : blue; // pick graph
            if (graph.has(node)){
                let nextColor = color === 'r' ? 'b' : 'r'; // toggle color
                let visited = color === 'r' ? blueVisited : redVisited; // toggle visited
                for (const nextNode of graph.get(node)){
                
                    if (visited[nextNode] !== nextColor){
                        visited[nextNode] = nextColor;
                        queue.push([nextNode, nextColor]);
                    }
                }   
            }
        }
        path++
    }
    return output
};