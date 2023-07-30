/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let requiredMap={};
    let leaves=new Array(numCourses).fill(0)
    for(const pairs of prerequisites) {
        let first=pairs[1];
        let second=pairs[0];
        if(first in requiredMap){
            requiredMap[first].push(second);
        }else{
            requiredMap[first]=[second];
        }
        leaves[second]++
    }
    let queue=[];
    let order=[];
for(let i=0;i<leaves.length;i++){
    if(leaves[i]===0)queue.push(i)
}
    while(queue.length){
        let second=queue.shift();
        if(second in requiredMap ){
            for(const child of requiredMap[second]){
                leaves[child]--;
                if(leaves[child]===0)queue.push(child);
            }
        }
        order.push(second);
    }
    console.log({order})
    return numCourses === order.length
};
  
