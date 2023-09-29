/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
 let reqList = new Map();
 let hasParent = new Array(numCourses).fill(0);
    for(const [course,req]of prerequisites){
        hasParent[course]+=1;
        if(!reqList.get(req)){
            reqList.set(req,[course]);
        }else{
            let neighbors = reqList.get(req);
            neighbors.push(course);
            reqList.set(req,neighbors);
        }
    };
    let queue=[];
    for(let i=0;i<hasParent.length;i++){
        if(hasParent[i]===0){
            queue.push(i);
        }
    };
    let order=[];
    while(queue.length){
        const node = queue.shift();
        if(reqList.get(node)){
            for(const child of reqList.get(node)){
                hasParent[child]--;
                if(hasParent[child]===0){
                    queue.push(child);
                }
            }
        }
        order.push(node);
    }
    return order.length === numCourses
};