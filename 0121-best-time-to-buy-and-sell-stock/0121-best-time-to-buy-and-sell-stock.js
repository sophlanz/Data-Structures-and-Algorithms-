/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
        let l=0;
        let r=1
        let max=0
        while(r<prices.length) {
            //check if profitable
            if(prices[l]<prices[r]) {
                //update max profit if it's more
                max=Math.max(max,prices[r]-prices[l])
            }else {
                //not profitable
                l=r
            }
            //only update right pointer, leave left pointer where it is since we know l leads to a profit
            r+=1
        }
        return max
};