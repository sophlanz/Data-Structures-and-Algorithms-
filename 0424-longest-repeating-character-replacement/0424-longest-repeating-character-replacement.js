/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
let start=0,
    map={},
    maxLen=0,
    mostFreqChar=0;
    for(let end=0;end<s.length;end++) {
        let rChar=s[end];
        map[rChar] = map[rChar]+1 || 1;
        mostFreqChar=Math.max(mostFreqChar,map[rChar]);
        if((end-start+1-mostFreqChar)>k) {
            //shrink window 
            let lChar = s[start];
            map[lChar]--;
            start++
        }
        maxLen=Math.max(maxLen,end-start+1);
    }
return maxLen
};