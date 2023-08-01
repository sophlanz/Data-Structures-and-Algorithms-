/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function(n, connections) {
    const graph = new Map();
    for(let i=1;i<=n;i++){
        graph.set(i,new Map());
    }
    for(let [to,from,dist] of connections){
        if(graph.get(to).has(from)){
            dist = Math.min(dist, graph.get(to).get(from));
        }
        graph.get(to).set(from,dist);
        graph.get(from).set(to,dist)
    }
    let minHeap = new MinPriorityQueue();
    minHeap.enqueue(1,0);
    let cost=0;
    let seen= new Set();
    while(minHeap.size()){
        const {element,priority}=minHeap.dequeue();
        if(seen.size ===n)return cost
        if(seen.has(element))continue;
        cost += priority;
        seen.add(element);
        for(const [node,distance] of graph.get(element)){
            minHeap.enqueue(node,distance)
        }
    }
    return -1
};