/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let tank=0,start=0,total=0;
    for(let i=0;i<gas.length;i++) {
        let consume = gas[i]-cost[i];
        tank += consume;
        if(tank < 0) {
            start = i+1;
            tank=0
        }
        total+= consume
    }
    return total>=0 ? start : -1;
};