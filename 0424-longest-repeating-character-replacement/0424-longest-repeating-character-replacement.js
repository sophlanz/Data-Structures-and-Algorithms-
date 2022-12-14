/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let start=0,
        maxRepeatingLetter=0,
        maxLen=0,
        freqMap={};
    for(let end=0;end<s.length;end++) {
        let rChar = s[end];
        freqMap[rChar] = freqMap[rChar]+1 || 1;
        maxRepeatingLetter = Math.max(maxRepeatingLetter,freqMap[rChar]);
        while((end-start+1 - maxRepeatingLetter) >k) {
            //shrink the window
            let lChar= s[start];
            freqMap[lChar]--
            start++
        }
        maxLen=Math.max(maxLen,end-start+1)
    }
    return maxLen
};