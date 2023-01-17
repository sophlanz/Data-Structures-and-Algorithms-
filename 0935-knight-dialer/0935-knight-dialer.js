/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
    const MOD = 1e9+7
    const nextKeys = [
        [4,6],
        [8,6],
        [7,9],
        [8,4],
        [0,9,3],
        [],
        [0,1,7],
        [2,6],
        [1,3],
        [2,4]
    ];
    let dp = new Array(10).fill(1);
    for(let i=2;i<=n;i++) {
        let newDp = new Array(10).fill(0);
        for(let digit=0;digit<=9;digit++) {
            for(const nextKey of nextKeys[digit]) {
                newDp[digit] = (newDp[digit] + dp[nextKey]) %MOD;
            }
        }
        dp = newDp;
    }
    let result = 0;
    for(const count of dp) {
        result = (result+count)%MOD;
    }
    return result;
};