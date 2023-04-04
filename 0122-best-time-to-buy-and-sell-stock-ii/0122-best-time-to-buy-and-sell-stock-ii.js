/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
let l=0,r=1,profit=0;
    while(r<prices.length){
        if(prices[r]-prices[l]>0){
            profit += prices[r]-prices[l];
        }
        r++
        l++
    }
    return profit
};