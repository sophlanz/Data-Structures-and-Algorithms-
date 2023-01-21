/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let  profit =0,
        l=0,
      r=1;
    while(r<=prices.length-1) {
        if(prices[r]-prices[l] <0) {
            l=r
        }else {
            profit = Math.max(profit, prices[r]-prices[l])
        }
        r++
    }
    return profit;
    
};