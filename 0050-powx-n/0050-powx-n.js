/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
if(n===0) return 1;
     //2^-2 => 1/2^2 => 1/x, n*-1
    if(n<0) return myPow(1/x, n*-1)
   

    //2^4 => 2*2*2*2 => 4*4 => 4^2
    if(n%2===0) return myPow(x*x, n/2)
    //2^5 => 2*2*2*2*2=> 4*4*2 => 2^2 * 2^2 * 2
    else return myPow(x*x,(n-1)/2)*x

 };