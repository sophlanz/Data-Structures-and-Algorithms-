/**
 * @param {number} n
 * @return {number}
 */
const memo ={};
memo[0] = 0;
memo[1] =1;
var fib = function(n) {
 if(n in memo) return memo[n];
    return memo[n]=fib(n-1) + fib(n-2);
    
};