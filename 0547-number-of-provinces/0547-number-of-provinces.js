/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
 let parents =[];
    for(let i=0;i<isConnected.length;i++){
        parents.push(i);
    }
    const find = (child)=>{
        console.log(parents)
        if(parents[child]===child)return child;
        else{
            parents[child]=find(parents[child]);
            return parents[child];
        }
    }
    const union = (parent,newParent) =>{
        parents[parent]=newParent
        for(let i=0;i<parents.length;i++){
            if(parents[i]===parent)parents[i]=newParent
        }
    }
    for(const arr of isConnected){
        let indexes=[];
        for(let i=0;i<arr.length;i++){
            if(arr[i]===1) {
                if(!indexes.length){
                 indexes.push(find(i))
                }else{
                    if(parents[i] !==indexes[0]){
                        union(parents[i],indexes[0])
                    }
                    parents[i]=indexes[0];
                    
                }
            }
        }
    }
    let set = new Set(parents);
    return set.size
};