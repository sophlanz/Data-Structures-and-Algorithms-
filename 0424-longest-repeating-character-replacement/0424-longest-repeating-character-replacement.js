/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
let count = new Array(26).fill(0);
    let start=0,end=0;
    let maxLen=0;
    let maxCount=0;
    for(let end=0;end<s.length;end++){
        maxCount = Math.max(maxCount, ++count[s.charCodeAt(end)-65]);
        if(end-start+1-maxCount>k){
            count[s.charCodeAt(start)-65]--;
            start++
        }
        maxLen = Math.max(maxLen,end-start+1)
    }
    return maxLen
};
