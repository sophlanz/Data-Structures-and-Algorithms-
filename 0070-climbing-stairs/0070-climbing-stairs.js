/**
 * @param {number} n
 * @return {number}
 */
    let memo={}
memo[1]=1
memo[0]=1
var climbStairs = function(n) {
if(n in memo)return memo[n];
    return memo[n] = climbStairs(n-1) + climbStairs(n-2)

};
     