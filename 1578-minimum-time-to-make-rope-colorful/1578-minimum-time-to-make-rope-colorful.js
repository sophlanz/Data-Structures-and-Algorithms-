/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(s, cost) {
let res=0;
    let max=0;
    for(let i=0;i<s.length;i++){
        res += cost[i];
        max = Math.max(cost[i],max);
        if(s[i] !== s[i+1]) {
            res -= max
            max =0
        }
    }
    return res
};