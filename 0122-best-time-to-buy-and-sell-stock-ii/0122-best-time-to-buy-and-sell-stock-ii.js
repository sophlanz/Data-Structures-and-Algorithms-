/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
let profit = 0;
    for(let i=1;i<prices.length;i++) {
        let today = prices[i];
        let yesterday = prices[i-1];
        if(today-yesterday>0){
            profit += today-yesterday
        }
    }
    return profit
};