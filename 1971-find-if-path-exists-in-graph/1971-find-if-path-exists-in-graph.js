/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let graph = new Map();
    for(const [to,from]of edges){
        if(graph.has(to)){
            graph.get(to).push(from);
        }else{
            graph.set(to,[from]);
        }
        if(graph.has(from)){
            graph.get(from).push(to);
        }else{
            graph.set(from,[to]);
        }
    }
    let queue = [source];
    let seen = new Set();
    seen.add(source)
    while(queue.length){
        let node = queue.shift();
        if(node === destination)return true;
        for(const child of graph.get(node)){
            if(child ==destination)return true;
            if(!seen.has(child)){
                queue.push(child);
                seen.add(child);
            }
        }
    }
    return false
};