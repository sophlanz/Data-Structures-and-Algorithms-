/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
   let product =1;
    while(product <=n){
        if(product === n)return true;
        product *= 2
    }
    return false
};