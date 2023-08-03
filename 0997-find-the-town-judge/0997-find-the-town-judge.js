/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if(n===1)return 1
 let graph = new Map();
    let whoTrusts=new Array(n+1).fill(0);
    for(const [trusting,trusted]of trust){
        whoTrusts[trusting]++
        if(graph.has(trusted)){
            graph.get(trusted).push(trusting);
        }else{
            graph.set(trusted,[trusting]);
        }
    };

    let trustsNoOne=[];
    for(let i=1;i<whoTrusts.length;i++){
        if(whoTrusts[i]===0)trustsNoOne.push(i)
        if(trustsNoOne.length>1)return -1
    }
    if(!trustsNoOne.length)return -1
    let trustingPeople = graph.get(trustsNoOne[0]);
 
    return trustingPeople.length === n-1 ? trustsNoOne[0]:-1
};


