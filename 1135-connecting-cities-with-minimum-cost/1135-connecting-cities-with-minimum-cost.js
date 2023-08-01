/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function(n, connections) {
    connections.sort((a,b)=> a[2]-b[2])
    const parent=[];
    for(let i=0;i<=n;i++){
        parent.push(i);
    }
    const findParent = (child)=>{
        if(parent[child]===child)return child;
        else{
            parent[child]=findParent(parent[child])
            return parent[child];
        }
    }
    let cost=0;
    let seen=1;
    for(const [to,from,dist] of connections){
        if(findParent(to) !== findParent(from)){
            parent[findParent(from)] = findParent(to)
             seen++
            cost += dist
        }
    }

    return seen===n ? cost : -1
   
};