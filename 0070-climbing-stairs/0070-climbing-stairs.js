/**
 * @param {number} n
 * @return {number}
 */
    let memo={}
var climbStairs = function(n) {
    if(n===0 ){
        memo[n]=1
    }
    if(n in memo) {
        return memo[n]
    }
    if(n<0)return 0
 memo[n]= climbStairs(n-1) +  climbStairs(n-2)
 return memo[n];

};
     