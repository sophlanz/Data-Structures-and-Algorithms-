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
    let queue=[]
    let order=[];
    for(let i=0;i<hasParent.length;i++){
        if(hasParent[i]===0)queue.push(i);
    }
    while(queue.length){
        let node = queue.shift();
        if(adjList.get(node)){
                  for(const child of adjList.get(node)){
               hasParent[child]--
                if(hasParent[child]===0){
                    queue.push(child)
            }
       
        }  
        }
  
        order.push(node)
    }
    return order.length===numCourses
};