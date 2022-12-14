/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
let start=0,
    maxLen=0,
    maxRepeatingChars=0,
    map={};
    for(let end=0;end<s.length;end++) {
        let rChar = s[end];
        map[rChar] = map[rChar] +1 || 1;
        maxRepeatingChars = Math.max(maxRepeatingChars,map[rChar]);
        while((end-start+1-maxRepeatingChars) >k ) {
            let lChar = s[start];
            map[lChar]--
            start++
        }
        maxLen=Math.max(maxLen,end-start+1)
    }
    return maxLen
};