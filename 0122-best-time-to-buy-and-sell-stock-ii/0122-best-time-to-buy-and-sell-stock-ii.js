/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
let sum=0;
    for(let i=1;i<prices.length;i++) {
        const today = prices[i];
        const yesterday = prices[i-1];
        if(today-yesterday >0) sum+= today-yesterday;
    }
    return sum;
    
};