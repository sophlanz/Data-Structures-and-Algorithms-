/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x=x.toString();
    let l=0,r=x.length-1;
    while(l<r){
        if(x[l] !== x[r]){
            return false;
        }else{
            l++
            r--
        }
    }
    return true;
};