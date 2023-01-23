/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    let l=0,
        r=s.length-1;
    while(l<=r) {
        if(s[l] === s[r]) {
            l++
            r--
        }else {
            return 2
        }
    }
    return 1;
};