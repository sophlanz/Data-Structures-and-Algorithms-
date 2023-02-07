/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let res = Array.from(x.toString());
    let l=0;
    let r= res.length-1;
    while(l<r) {
        if(res[l] !== res[r]) return false;
        l++
        r--
    }
    return true;
};