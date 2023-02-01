/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
 let start=0,tank=0,total=0;
    for(let i=0;i<gas.length;i++) {
        let consumption = gas[i] - cost[i];
        tank += consumption;
        if(tank<0) {
            start = i+1;
            tank=0
        }
        total += consumption
    }
    return total >= 0 ? start: -1;
};