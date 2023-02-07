/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    let timeLine = new Array(101).fill(0);
    let max = 0;
    for (const [birth,death] of logs) {
        timeLine[birth-1950] ++;
        timeLine[death-1950]--;
    }
    for(let i=1;i<timeLine.length;i++) {
        timeLine[i] = timeLine[i] + timeLine[i-1];
        if(timeLine[i] > timeLine[max]) max = i;
    }
    return max+1950;
};