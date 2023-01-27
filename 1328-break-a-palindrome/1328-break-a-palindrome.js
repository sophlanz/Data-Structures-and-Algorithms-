/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
let res = palindrome.split('');
    for(let i=0;i<Math.floor(res.length/2);i++) {
        if(res[i] !=="a") {
            res[i] = "a";
            return res.join('');
        }
    }
    if(res.length ===1) {
        return ''
    }else {
         res[res.length-1] = 'b';
        return res.join('')
    }
};