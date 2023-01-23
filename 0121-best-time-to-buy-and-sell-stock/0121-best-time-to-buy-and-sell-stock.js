/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit=0,
        l=0,
        r=1;
    while(r<prices.length) {
        let sum = prices[r]-prices[l];
        if(sum >0) {
            profit = Math.max(profit,sum);
        }else {
            l=r
        }
        r++
    }
    return profit;
};