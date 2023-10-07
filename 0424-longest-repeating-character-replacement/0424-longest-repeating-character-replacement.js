/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let maxFreq=0;
    let maxLen=0;
    let start=0;
    let charCount = new Array(26).fill(0);
    for(let end=0;end<s.length;end++){
        charCount[s.charCodeAt(end)-65]+=1;
        maxFreq=Math.max(charCount[s.charCodeAt(end)-65],maxFreq);
        if(end-start+1-maxFreq>k){
            charCount[s.charCodeAt(start)-65]-=1
            start++
        }
      maxLen=Math.max(maxLen,end-start+1) 
    }
    return maxLen
};