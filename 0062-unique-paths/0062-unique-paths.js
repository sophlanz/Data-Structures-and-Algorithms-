/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = Array(m).fill(1).map(()=> Array(n).fill(1));
    const rows = m
    const cols=n
    for(let i=1;i<rows;i++) {
        for(let j=1;j<cols;j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
        console.log(dp)
    return dp[m-1][n-1]

};