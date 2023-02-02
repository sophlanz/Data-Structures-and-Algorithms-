/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(s, cost) {
    
   
     let res = 0,
         max=0;
  for (let i = 0; i <s.length; i++) {
      const time = cost[i]
    res += time;
    max = Math.max(max, time);
    if (s[i] !== s[i + 1]) {
      res -= max;
      max = 0;
    }
  }
  return res;
};