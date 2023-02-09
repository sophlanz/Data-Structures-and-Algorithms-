/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
let time=0
    for(let i=1;i<colors.length;i++) {
        if(colors[i] === colors[i-1]) {
            time += Math.min(neededTime[i], neededTime[i-1]);
           
            //since we removed the smaller one, we have to update the new neighbor
            neededTime[i] = Math.max(neededTime[i], neededTime[i-1]);
  
            
        }
    }
    return time;
};