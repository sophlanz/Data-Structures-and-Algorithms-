/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
let start =0,
    maxLen=0,
    map={},
    maxRepeatingChar=0;
    for(let end=0;end<s.length;end++) {
        let rChar = s[end];
        map[rChar] = map[rChar] +1 || 1;
        maxRepeatingChar = Math.max(maxRepeatingChar,map[rChar]);
        while((end-start+1 - maxRepeatingChar)>k) {
            //shrink the window 
            let lChar = s[start];
            map[lChar]--
            start++
        }
        maxLen=Math.max(maxLen,end-start+1);
    }
    return maxLen
};