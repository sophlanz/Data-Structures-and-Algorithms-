/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.replace(/\s+/g,'').replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    let l=0,r=s.length-1;
    while(l<r){
        if(s[l] == s[r]){
            r--
            l++
        }else return false
    }
    return true
};