/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
 let memo = new Map();
 if(n<=1) {
     return n
 }
    if(memo.has(n)) return memo.get(n);
     memo.set(n,fib(n-1) + fib(n-2)) ;
    return memo.get(n)
};