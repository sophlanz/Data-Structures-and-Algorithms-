/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    if(!edges.length && source===destination)return true
    let adjList = {};
    for(const [start,end] of edges){
        if(start in adjList){
            adjList[start].push(end);
        }else{
            adjList[start]=[end];
        }
        if(end in adjList){
            adjList[end].push(start);
        }else{
            adjList[end]=[start]
        }
    }
    let seen = new Set();
let queue=[source];
    seen.add(source);
    while(queue.length){
        let start = queue.shift();
        if(start in adjList ){
            for(const child of adjList[start]){
                if(child==destination)return true;
                if(!seen.has(child)){
                    queue.push(child) 
                    seen.add(child)
                }
            }
        }
    }
    return false
};