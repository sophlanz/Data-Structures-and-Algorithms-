/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let hasParent = new Array(numCourses).fill(0);
    let adjList = new Map();
    for(const [to,from] of prerequisites){
        hasParent[to]+=1
        if(!adjList.get(from)){
            adjList.set(from,[to])
        }else{
            let neighbors = adjList.get(from);
            neighbors.push(to);
            adjList.set(from,neighbors);
        }
    }
    let queue=[]
    for(let i=0;i<hasParent.length;i++){
        if(hasParent[i]===0){
            queue.push(i)
        }
    };
    let count=0;
    while(queue.length){
        const node = queue.shift();
        if(adjList.has(node)){
            for(const neighbor of adjList.get(node)){
                hasParent[neighbor]--;
                if(hasParent[neighbor]===0){
                    queue.push(neighbor)
                }
            }
        }
        count++
    }
    return numCourses===count
};