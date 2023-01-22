/**
 * @param {number} n
 * @return {number}
 */
let memo = {};
memo[1] = 1;
memo[0] = 0;
var fib = function(n) {
    if(n<=1) return n
    if(memo[n] ) return memo[n]
    return memo[n] = fib(n-1) + fib(n-2)
};