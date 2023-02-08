/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs.sort((a,b)=> (a[1]-a[0])-(b[1]-b[0]));
    return costs.reduce((total,cost,idx)=> (idx<Math.floor(costs.length/2) ? total+cost[1] : total+cost[0]),0)
};