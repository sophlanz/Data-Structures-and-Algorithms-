/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    
    let count = new Array(101).fill(0);
    for(const [birth,death] of logs) {
        count[birth-1950]++
        count[death-1950]--
    }
    let yearMaxPop=0;
    for(let i=1;i<101;i++) {
        count[i] += count[i-1];
        if(count[i] > count[yearMaxPop]) yearMaxPop=i;
    }
    return 1950+yearMaxPop
    
};