/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
let res = palindrome.split('');
    if(res.length ===1) return '';
    for(let i=0;i<Math.floor(res.length/2);i++) {
        if(res[i]!=="a") {
            res[i]="a";
            return res.join('');
        }
    }
    res[res.length-1]="b";
    return res.join('');
};