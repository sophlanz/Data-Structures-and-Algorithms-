/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const order=[];
const queue=[];
let numOfParents = new Array(numCourses).fill(0);
const graph=new Map();
    for(const [e,v] of prerequisites){
        numOfParents[e]++
        if(graph.has(v)){
            graph.get(v).push(e)
        }else{
            graph.set(v,[e])
        }
        
    }
    for(let i=0;i<numOfParents.length;i++){
       if(numOfParents[i]===0)queue.push(i);
    }
   while(queue.length){
       let node = queue.shift();
       if(graph.has(node)){
           for(const child of graph.get(node)){
               numOfParents[child]--
               if(numOfParents[child]===0)queue.push(child);
           }
       }
       order.push(node);
   }
    return order.length == numCourses ? order : []
};