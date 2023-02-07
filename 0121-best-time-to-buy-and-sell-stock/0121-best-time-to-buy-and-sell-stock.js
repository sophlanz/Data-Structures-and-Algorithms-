/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let l=0,
      maxProfit=0,
      r=1;
    while(r<prices.length){
        let profit = prices[r]-prices[l];
        if(profit>0) {
            r++
            maxProfit = Math.max(maxProfit,profit);
        }else {
            l=r
            r++
        }
    }
    return maxProfit
};