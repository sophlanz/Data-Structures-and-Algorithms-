/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
 let memo = {}
 if(n<=1) {
     return n
 }
    if(memo[n]) return memo[n];
      
    return memo[n]= fib(n-1) + fib(n-2);
};