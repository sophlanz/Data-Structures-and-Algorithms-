/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    if(points.length<=1)return 0
let parents = [];
    let distances=[];

    for(let i=0;i<points.length;i++){
        parents.push(i);
     
    };
    for(let i=0;i<points.length-1;i++){
        const x1=points[i][0];
        const y1=points[i][1]
        for(let j=i+1;j<points.length;j++){
            const x2=points[j][0];
            const y2=points[j][1];
            const xDiff = Math.abs(x2-x1);
            const yDiff = Math.abs(y2-y1);
            const distance= xDiff+yDiff;
            distances.push([i,j,distance])
        }
    }
    distances.sort((a,b)=>a[2]-b[2])
    const findParent = (child)=>{
        if(parents[child]===child)return child;
        parents[child]=findParent(parents[child]);
        return parents[child]
    }
let cost=0
    for(let [i,j,dist]of distances){
        if(findParent(i) !== findParent(j)){
             parents[findParent(i)]=findParent(j);
            cost += dist
        } 
    }
    return cost
};
