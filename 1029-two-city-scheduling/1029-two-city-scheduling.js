/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs.sort((a,b)=> (a[1]-a[0]) - (b[1]-b[0]));
    return costs.reduce((total,price,idx)=> (idx< costs.length/2 ? total+ price[1] : total + price[0]),0)
};