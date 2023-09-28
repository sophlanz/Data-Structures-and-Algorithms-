/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let adjList = new Map();
    let hasParent = new Array(numCourses).fill(0);
    for(const [to, from] of prerequisites){
        hasParent[to]++
        if(!adjList.has(from)){
            adjList.set(from,[to]);
        }else{
            let neighbors = adjList.get(from);
            neighbors.push(to);
            adjList.set(from,neighbors);
        }
    };
    let fullyExplored = new Map();
    let order=[]
    const DFS = (node)=>{
        if(fullyExplored.has(node)){
            return fullyExplored.get(node)
        }
        fullyExplored.set(node,false);
        if(adjList.has(node)){
            for(const child of adjList.get(node)){
                if(!DFS(child))return false
            }
        }
        fullyExplored.set(node,true)
        order.push(node)
        return true;
        
    }
    if(!hasParent.includes(0))return false
    for(let i=0;i<hasParent.length;i++){
        if(hasParent[i]===0) {
           if(!DFS(i)) return false
        }
    }
   return order.length === numCourses
};