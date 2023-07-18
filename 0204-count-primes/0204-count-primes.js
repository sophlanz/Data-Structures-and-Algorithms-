/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let dp = new Array(n).fill(1);
    for(let i=2;i<=n;i++){
        let j=i+i;
        while(j<dp.length){
            if(dp[j]===1)dp[j]=i;
            j=j+i
        }
    }
    let count=0
    for(let i=2;i<n;i++){
        if(dp[i] === 1)count++
    }
    return count
};