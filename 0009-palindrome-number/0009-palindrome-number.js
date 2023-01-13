/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
 let arr = String(x).split('');
    while(arr.length >1) {
        if(arr.pop() !== arr.shift()) {
            return false
        }
    }
    return true;
    };