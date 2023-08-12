/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let res = 0;
    let dp = new Array(s.length).fill(false).map(()=> new Array(s.length).fill(false))
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i; j < s.length; j++) {
            dp[i][j] = s.charAt(i) == s.charAt(j) && (j - i  + 1 <= 3 || dp[i + 1][j - 1]);
            if(dp[i][j]) res++;
        }
    }
    return res;

};