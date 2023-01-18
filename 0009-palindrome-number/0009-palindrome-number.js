/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x=Array.from(String(x))
    let l = 0;
    let r = x.length-1;
    while(l<r) {
        if(x[l] !== x[r]) return false;
        l++
        r--
    }
    return true
};