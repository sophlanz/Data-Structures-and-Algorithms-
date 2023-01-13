/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
 x=x.toString();
    let l =0;
    let r = x.length-1
    console.log(r)
    if(x<0) {
        return false
    }
    while(l<=r) {
        console.log(x[l])
        if(x[l]=== x[r]) {
            l++
            r--
        } else {
            return false
        }
    }
    return true
    };